import { cores } from './../../styles/cores';
import styled from "styled-components";

interface ButtonProps{
    children: object;
}

export const DivBotao = styled.div<ButtonProps>`
    position: static;
    display: none;
    margin:0 auto 0 auto;
    
    @media (min-width: 720px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
`

export const BotaoDesce= styled.button<ButtonProps>`
    height: 50px;
    width: 50px;
    background-color: transparent;
    border: 1px solid ${cores.PALTEL_BLUE};
    border-radius: 50%;
    cursor: pointer;
`

export const LegendaBotao = styled.p`
    text-align: center;
    font-size: 12px;
    text-transform: uppercase;
    color:${cores.PALTEL_BLUE};
`