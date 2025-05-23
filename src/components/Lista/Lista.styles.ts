import { cores } from "@/styles/cores";
import { fontes } from "@/styles/fontes";
import styled from "styled-components";

interface ItemProps{
    color: string;
    icone: string;
    tamanho: string;
}

export const Lista = styled.ul`
  list-style: none; 
  padding: 0;
  display: flex;
  flex-direction: column;
  gap:30px;
`;

export const Item = styled.ul<ItemProps>`
  position: relative;
  padding-left: 20px;
  color: ${({color}) => color};
  font-family: ${fontes.tipografia.gotham};
  font-size: ${({tamanho}) => tamanho};
  line-height: 20px;
  font-weight: 300;
  

  &::before {
    content: ${({icone}) => icone};
    position: absolute;
    left: 0;
    color: ${cores.MAGENTA}; 
    font-weight: bold;
  }

    @media (min-width: 413px) {
        font-size: ${fontes.tamanho.desktop.listas}
    }
`;