import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    html, body {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`;

export default GlobalStyle;
