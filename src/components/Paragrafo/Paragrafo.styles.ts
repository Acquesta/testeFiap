import styled from "styled-components";
import { ParagrafoProps } from "./Paragrafo.types";
import { fontes } from "@/styles/fontes";

export const ParagrafoP = styled.p<ParagrafoProps>`
    color: ${({color}) => color};
    font-size: ${fontes.tamanho.mobile.paragrafos};
    font-family: ${fontes.tipografia.gotham};
    line-height: 20px;
    font-weight: 300;
    letter-spacing: 0%;
`