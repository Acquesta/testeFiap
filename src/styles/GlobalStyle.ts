"use client"

import { createGlobalStyle } from "styled-components";
import { cores } from "./cores";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    ::-webkit-scrollbar {
        width: 6px;
    }

    /* Fundo da barra de rolagem */
    ::-webkit-scrollbar-track {
        background: ${cores.MAGENTA + '40'};
    }

    /* "Botão" que você arrasta */
    ::-webkit-scrollbar-thumb {
        background: ${cores.MAGENTA};
    }

    /* Quando passar o mouse no thumb */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

`