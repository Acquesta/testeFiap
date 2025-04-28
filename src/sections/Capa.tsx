"use client"

import Titulo from "@/components/Titulo";
import { cores } from "@/styles/cores";
import { fontes } from "@/styles/fontes";
import styled from "styled-components";
import fundoCapa from '@/assets/imgs/header.jpg'
import Paragrafo from "@/components/Paragrafo";
import BotaoDesceSecao from "@/components/BotaoDesceSecao";

interface FundoCapaProps {
    background: string
}

interface SectionCapaProps {
    background: string
}

const SectionCapa = styled.section<SectionCapaProps>`
    margin-top: 80px;
    background-color: ${cores.BLACK};

    @media (min-width: 413px) {
        padding: 179px 129px 0 129px;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap:20px;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0) 80%),
        linear-gradient(to top, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0) 80%),
        url(${({background}) => background});
        background-position: center;
        background-size: cover;
    }
`

const FundoCapa = styled.div<FundoCapaProps>`
    background-position: center;
    background-size: cover;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0) 80%),
    linear-gradient(to top, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0) 80%),
    url(${({background}) => background});
    padding: 67px 24px;

    @media (min-width: 413px) {
        background: none;
        padding: 0;
    }
`

const ParagrafoDiv = styled.div`
    padding: 30px 24px;

    @media (min-width: 413px) {
        background: none;
        width: 60vw;
        padding: 0;
    }

`

function Capa() {

    return ( 
        <SectionCapa background={fundoCapa.src}>
            <FundoCapa background={fundoCapa.src}>
                <Titulo color={cores.MAGENTA} tipografia={fontes.tipografia.gotham} stroke={'true'}>
                    A maior faculdade
                </Titulo>
                <Titulo color={cores.PALTEL_BLUE} tipografia={fontes.tipografia.gotham} stroke={'false'}>
                    de tecnologia
                </Titulo>
            </FundoCapa>
            <ParagrafoDiv>
                <Paragrafo color={cores.PALTEL_BLUE}>
                Referência em tecnologia e inovação no Brasil, a FIAP é uma faculdade que prepara profissionais para o futuro, com um ensino prático, professores atuantes no mercado e desafios reais que conectam os alunos às grandes empresas. 
                </Paragrafo>
            </ParagrafoDiv>

            <BotaoDesceSecao>

            </BotaoDesceSecao>

        </SectionCapa>
     );
}

export default Capa;