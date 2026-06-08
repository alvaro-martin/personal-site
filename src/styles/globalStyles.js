import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%; /*10px*/
    }

    @media(max-width: 778px){
        html{
            font-size: 50%;
        }
    }

    body {
        background: ${p => p.theme.background1};
        min-height: 100vh;
        max-width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${p => p.theme.fontColor1};
    }
`;

export default GlobalStyle;