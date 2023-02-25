import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        --background: #ffffff;
    }

    body {
        width : 100vw;
        height : 100vh;
        font-family: Arial, Helvetica, sans-serif;
        overflow-x : hidden;
        background-color: var(--background);
    }

`;

export default GlobalStyle;