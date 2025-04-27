"use client"

import Titulo from "@/components/Titulo";
import { cores } from "@/styles/cores";
import { fontes } from "@/styles/fontes";
import styled from "styled-components";
import fundoCapa from '@/assets/imgs/header.jpg'
import Paragrafo from "@/components/Paragrafo";

interface FundoCapaProps {
    background: string
}

const DivCapa = styled.section`
    margin-top: 80px;
`

const FundoCapa = styled.div<FundoCapaProps>`
    background-image: linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0) 80%),
    linear-gradient(to top, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0) 80%),
    url(${({background}) => background});
    background-position: center;
    background-size: cover;
    padding: 67px 24px;
`

const ParagrafoDiv = styled.div`
    background-color: ${cores.BLACK};
    padding: 30px 24px;
`

function Capa() {

    return ( 
        <DivCapa>
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
        </DivCapa>
     );
}

export default Capa;