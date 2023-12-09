import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #0C1317;
        --shape: #202C33;
        --chat: #111B21;
        --text-title: #E4EBEB;
        --text-span: #819096
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1000px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        color: var(--text-title);
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 400;
        color: var(--text-title);
    }

    span {
        color: var(--text-span);
    }

    button {
        cursor: pointer;
    }

    img {
        border-radius: 50%;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;