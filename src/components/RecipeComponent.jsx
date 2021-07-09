import styled from "styled-components"



const RecipeListContainer = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
padding:30px;
gap:20px; 
justify-content:space-evenly;
`;

const RecipeContainer = styled.div`
  display:flex;
  flex-direction : column;
  flex-wrap:wrap;
  padding : 10px;
  width:300px;
  box-shadow : 0 3px 10px 0 #aaa;
`;

const CoverImage = styled.img`
height:200px;
object-fit:cover;
`;

const RecipeName = styled.span`
font-size:18px;
font-weight:bold;
color: black;
margin:10px 0;

`;

const IngredientsText = styled.span`
font-size:18px;
color: green;
margin-bottom:12px;
border:1px solid green;
cursor:pointer;
padding:10px 15px;
border-radius:4px;
text-align:center;
`;

const SeeMoreText = styled.span`
font-size:18px;
color: red;
margin:10px 0;
border:1px solid red;
cursor:pointer;
padding:10px 15px;
border-radius:4px;
text-align:center;
`;


export {RecipeListContainer,
    RecipeContainer,
    CoverImage,
    RecipeName,
    IngredientsText,
    SeeMoreText}