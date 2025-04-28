import { cores } from "@/styles/cores";
import { fontes } from "@/styles/fontes";
import styled from "styled-components";

export const ButtonBotao = styled.button`
    background-color: transparent;
    border: 2px solid ${cores.MAGENTA};
    color: ${cores.MAGENTA};
    text-transform: uppercase;
    text-align: center;
    font-weight: 500;
    font-family: ${fontes.tipografia.gotham};
    font-size: ${fontes.tamanho.mobile.botaoContato};
    padding: 20px 48px;
    margin-top: 50px;

    &:hover{
        background-color: ${cores.MAGENTA};
        color: ${cores.BLACK};
        cursor: pointer;
        transition: 0.2s ease-in-out;
    }
`