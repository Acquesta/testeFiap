"use client"

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* Fontes Gotham - vários pesos */
    @font-face {
        font-family: 'Gotham';
        src: url('/fonts/Gotham/GothamHTF-Thin.otf') format('opentype');
        font-weight: 100;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gotham';
        src: url('/fonts/Gotham/GothamHTF-XLight.otf') format('opentype');
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gotham';
        src: url('/fonts/Gotham/GothamHTF-Light.otf') format('opentype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gotham';
        src: url('/fonts/Gotham/GothamHTF-Book.otf') format('opentype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gotham';
        src: url('/fonts/Gotham/GothamHTF-Medium.otf') format('opentype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gotham';
        src: url('/fonts/Gotham/GothamHTF-Bold.otf') format('opentype');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gotham';
        src: url('/fonts/Gotham/GothamHTF-Black.otf') format('opentype');
        font-weight: 900;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gotham';
        src: url('/fonts/Gotham/GothamHTF-Ultra.otf') format('opentype');
        font-weight: 950;
        font-style: normal;
    }

    /* Fontes roboto */
    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/roboto/roboto-thin.ttf') format('truetype');
        font-weight: 100;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/roboto/roboto-thinItalic.ttf') format('truetype');
        font-weight: 100;
        font-style: italic;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/roboto/roboto-light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/roboto/roboto-lightItalic.ttf') format('truetype');
        font-weight: 300;
        font-style: italic;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/roboto/roboto-regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/roboto/roboto-italic.ttf') format('truetype');
        font-weight: 400;
        font-style: italic;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/roboto/roboto-medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/roboto/roboto-mediumItalic.ttf') format('truetype');
        font-weight: 500;
        font-style: italic;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/roboto/roboto-bold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/roboto/roboto-boldItalic.ttf') format('truetype');
        font-weight: 700;
        font-style: italic;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/roboto/roboto-black.ttf') format('truetype');
        font-weight: 900;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/roboto/roboto-blackItalic.ttf') format('truetype');
        font-weight: 900;
        font-style: italic;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

`