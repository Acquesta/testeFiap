import { cores } from "@/styles/cores";
import styled from "styled-components";

export const ButtonVoltaTopo = styled.button<{ $visivel: boolean }>`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 50px;
  height: 50px;
  border: 1px solid ${cores.MAGENTA};
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  opacity: ${(props) => (props.$visivel ? 1 : 0)};
  pointer-events: ${(props) => (props.$visivel ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
  z-index: 10;

  @media (min-width: 413px) {
    bottom: 91px;
    right: 91px;
  }
`;