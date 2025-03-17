import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    :root {
    --primary-blue: #0500FF;
    --second-blue: #EDEFFB;
    --dark-color: #1C1C1C;
    --dark-gray: #9E9E9E;
    --neutral-gray: #DFDFDF;
    --light-gray: #F5F5F5;
    --clean-gray: #F0F0F0;
    --white-color: #FFFFFF;
    }

    body {
    font-family: 'Roboto', sans-serif;
    }
`