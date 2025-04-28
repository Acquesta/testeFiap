import { cores } from '@/styles/cores';
import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  border: 2px solid ${cores.MAGENTA}; /* azul */
  border-radius: 50%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const HorizontalBar = styled.div`
  position: absolute;
  width: 20px;
  height: 3px;
  background-color: ${cores.MAGENTA};
`;

export const VerticalBar = styled.div`
  position: absolute;
  width: 3px;
  height: 20px;
  background-color: ${cores.MAGENTA};
`;
