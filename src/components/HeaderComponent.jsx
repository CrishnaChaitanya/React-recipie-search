import styled from "styled-components"

const Header = styled.div`
color:white;
background-color:#0D1010;
display:flex;
flex-direction:row;
align-items:center; 
justify-content: space-between;
padding:20px;
font-size:25px;
font-weight:bold;
box-shadow: 0 3px 6px 0 white;
`;

const AppNameComponent = styled.div`
display:flex;
align-items: center; 
`;
const AppIcon = styled.img`
widht:36px;
height:36px;
margin:15px`;
const SearchComponent = styled.div`
display:flex;
flex-direction:row;
background-color: #FFFDF1;
padding : 10px;
border-radius :8px;
width:50%;
`;

const SearchIcon = styled.img`
width:32px;
height:32px;
`;

const SearchInput = styled.input`
border:none;
outline:none;
margin-left:15px;
font-size:15px;
font-weight:bold;;
background-color:#FFFDF1
;
`
export {Header,AppNameComponent,AppIcon,SearchComponent,SearchIcon,SearchInput} 