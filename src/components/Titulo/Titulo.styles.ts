import styled from "styled-components";
import { TituloProps } from "./index";
import { fontes } from "@/styles/fontes";

export const Titulo = styled.h2<TituloProps>`
    color: ${ ({stroke, color}) => stroke == 'true' ? 'transparent' : color };
    text-transform: uppercase; 
    font-family: ${({tipografia}) => tipografia};
    -webkit-text-stroke: 1.6px ${({color, stroke}) => stroke == 'true' ? color : 'transparent'};
    font-size: ${fontes.tamanho.mobile.titulo};
    font-weight: 500;

    @media (min-width: 720px) {
        font-size: ${fontes.tamanho.desktop.titulo};
    }
`