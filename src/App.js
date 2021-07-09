import { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Axios from "axios"
import {Header,AppNameComponent,AppIcon,SearchComponent,SearchIcon,SearchInput}  from "./components/HeaderComponent"
import {RecipeListContainer,RecipeContainer,CoverImage,RecipeName,IngredientsText,SeeMoreText} from "./components/RecipeComponent"
import Container from "./components/Container"
import Placeholder from "./components/Placeholder";


const APP_ID = "ab0a0240"
const APP_KEY = "0453918f92c53dffdb32b2860cebdc08"


const RecipeComponent = (props) => {
  const [show, setShow] = useState(false)
  const {recipeObj} = props;
  return (
    <>
  <Dialog open={show}>
    <DialogTitle>Ingredients</DialogTitle>
    <DialogContent>
          <RecipeName>{recipeObj.label}</RecipeName>
          <table>
            <thead>
              <th>Ingredient</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredient, index) => (
                <tr key={index} className="ingredient-list">
                  <td>{ingredient.text}</td>
                  <td>{ingredient.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <IngredientsText onClick = {() => window.open(recipeObj.url)}>See More</IngredientsText>
          <SeeMoreText onClick = {() => setShow(false)}>Close</SeeMoreText>
        </DialogActions>
  </Dialog>
    <RecipeContainer>
      <CoverImage src={recipeObj.image}/>
      <RecipeName>{recipeObj.label}</RecipeName>
      <IngredientsText onClick={() => setShow(true)}>Ingredients</IngredientsText>
      <SeeMoreText onClick={() => {window.open(recipeObj.url)}}>See Complete Recipe</SeeMoreText>
    </RecipeContainer>
    </>
  )
}
function App() {

  const [timeoutId, updateTimeoutId] = useState()
  const [recipeList, updateRecipeList] = useState([])
  const fetchRecipe  = async (searchString) => {
    const response = await Axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    console.log(response)
    updateRecipeList(response.data.hits)
  };

//This is called as De-bouncing 
//De-bouncing - very important concept
  const OnTextChange = (event) => {
    clearTimeout(timeoutId)
    const timeout = setTimeout(()=>{fetchRecipe(event.target.value)},500);
    updateTimeoutId(timeout);
};

  return (
    <Container>
      <Header>
        <AppNameComponent>
          <AppIcon src="hamburger.svg" />food.find(Recipe)</AppNameComponent>
        <SearchComponent>
        <SearchIcon src="/search-icon.svg"></SearchIcon>
        <SearchInput placeholder="Search Recipe" onChange={OnTextChange}></SearchInput>
        </SearchComponent>
        </Header>
        <RecipeListContainer>
            {recipeList.length ? recipeList.map((recipeObj) =>( <RecipeComponent recipeObj={recipeObj.recipe}/>))
   : <Placeholder src="hamburger.svg"></Placeholder>}
        </RecipeListContainer>
    </Container>
  );
}

export default App;
