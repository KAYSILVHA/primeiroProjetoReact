import styled from "styled-components";

export const Paragrafo = styled.p`
color: red;
font-size: 25px;
&:hover{
  color: blue;
} 
`

export const HeaderNav = styled.header`
background-color: black;
color: darkgoldenrod;

@media screen and (max-width: 500px){
  background-color: darkcyan;
}
`
