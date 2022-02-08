import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --yellow-50: #FFFFF0;
        --yellow-100: #FEFCBF;
        --yellow-200: #FAF089;
        --yellow-300: #F6E05E;
        --yellow-400: #ECC94B;
        --yellow-500: #F0AB08;
        --yellow-600: #B7791F;

        --blue-50: #EBF8FF;
        --blue-100: #BEE3F8;
        --blue-200:#90CDF4;
        --blue-300:#63B3ED;
        --blue-400: #4299E1;
        --blue-500: #3071AB;
        --blue-600: #2B6CB0;

        --background: #F7FAFC;
        --white: #FFFFFF;
    }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background: var(--background);
        --webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;