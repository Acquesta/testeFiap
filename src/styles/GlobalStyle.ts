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

    ::-webkit-scrollbar-track {
        background: ${cores.MAGENTA + '40'};
    }

    ::-webkit-scrollbar-thumb {
        background: ${cores.MAGENTA};
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

`