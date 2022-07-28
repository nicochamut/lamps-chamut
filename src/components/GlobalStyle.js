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
    ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 5px;
}
    ::-webkit-scrollbar-thumb {
    background-color: #525252;
    border-radius: 10px;
    }
    ::-webkit-scrollbar:horizontal {
    width: 2px;
}

::-webkit-scrollbar-track {
    border-radius: 10px;  
}
@media (max-width: 700px){


}

}

body {
    font-family: 'Inter', sans-serif;
    color: white;
    background: #1b1b1b;
    
   
    @media (max-width: 700px){
  
    }
}


`;

export default GlobalStyle;
