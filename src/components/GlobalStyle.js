import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1700px){
        font-size: 75%
    }
}

body {
    background:#ffffff;
    font-family: 'Inter', sans-serif;
    color: white;

}


`;

export default GlobalStyle;
