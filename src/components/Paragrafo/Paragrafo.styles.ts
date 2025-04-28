import { fontes } from "@/styles/fontes";
import styled from "styled-components";
import { ParagrafoProps } from "./index";

export const ParagrafoP = styled.p<ParagrafoProps>`
    color: ${({color}) => color};
    font-size: ${fontes.tamanho.mobile.paragrafos};
    font-family: ${fontes.tipografia.gotham};
    line-height: 20px;
    font-weight: 300;
    letter-spacing: 0%;

    @media (min-width: 413px) {
        font-size: ${fontes.tamanho.desktop.paragrafos};
        width: 100%;
        text-align: justify;
    }

    @media (max-width: 720px) {
        font-size: ${fontes.tamanho.desktop.paragrafos};
    }
`