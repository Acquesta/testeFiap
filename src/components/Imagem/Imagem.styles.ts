import { cores } from "@/styles/cores";
import { fontes } from "@/styles/fontes";
import styled from "styled-components";
import cursorAbrir from "@/assets/svg/cursor-open.svg"
import cursorFechar from "@/assets/svg/cursor-close.svg"

export const Thumbnail = styled.img`
  width: 100%; 
  cursor: url(${cursorAbrir.src}), auto;
  transition: transform 0.2s;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color:rgba(68, 68, 68, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  position: relative;
  width: 100%;
  cursor: url(${cursorFechar.src}), auto;

  @media (min-width: 413px) {
    width: 70%;
  }
`;

export const ModalImagem = styled.img`
  width: 100%;
  height: auto;
`;

export const BotaoFechar = styled.button`
  position: absolute;
  top: 28px;
  right: 23px;
  color: white;
  background-color: transparent;
  border: none;
  font-size: 2rem;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 1001;
`;

export const legendaImagem = styled.p`
    font-family: ${fontes.tipografia.roboto};
    font-size: ${fontes.tamanho.mobile.legendas};
    line-height: 24px;
    font-weight: 400;
    color: ${cores.DAVYS_GREY};

    @media (min-width: 413px) {
      font-size: ${fontes.tamanho.desktop.legendas};
    }
`;

export const DivImagem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`