import styled from "styled-components";
import { cores } from "@/styles/cores";
import { fontes } from "@/styles/fontes";

export const ContainerAccordion = styled.div`
  width: 100%;
  margin-top:70px;

  @media (min-width: 720px) {
    padding: 0 115px;
  }

`;

export const Item = styled.div`
  margin-top: -2px;
  border-bottom: 2px solid ${cores.DAVYS_GREY};
  border-top: 2px solid ${cores.DAVYS_GREY};
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 24px 0;
  color: ${cores.PALTEL_BLUE};
  font-weight: 700;
  font-size: ${fontes.tamanho.mobile.titulosAccordions};
  font-family: ${fontes.tipografia.gotham};
  cursor: pointer;
`;

export const Content = styled.div<{ $aberto: boolean }>`
    max-height: ${({ $aberto }) => ($aberto ? "500px" : "0")};
    overflow: hidden;
    transition: max-height 0.6s ease;
    margin-bottom: ${({ $aberto }) => ($aberto ? "20px " : "0 ")};
    font-family: ${fontes.tipografia.gotham};
    color: ${cores.SILVER_FOIL};
    font-size: ${fontes.tamanho.mobile.subListas};
    font-weight: 400;
    line-height: 20px;
    text-align: justify;

    @media  (min-width: 720px) {
     font-size: ${fontes.tamanho.desktop.subListas}; 
    }
  `;

export const Icon = styled.span`
  font-size: 24px;
  color: ${cores.MAGENTA};
`;