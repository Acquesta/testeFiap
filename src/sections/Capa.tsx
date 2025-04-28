"use client"

import Titulo from "@/components/Titulo";
import { cores } from "@/styles/cores";
import { fontes } from "@/styles/fontes";
import styled from "styled-components";
import fundoCapa from '@/assets/imgs/header.jpg'
import Paragrafo from "@/components/Paragrafo";
import BotaoDesceSecao from "@/components/BotaoDesceSecao";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-evenly;
        gap:20px;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0) 80%),
        linear-gradient(to top, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0) 80%),
        url(${({background}) => background});
        background-position: center;
        background-size: cover;
    }
`

const DivTitulo = styled.div`
    @media (min-width: 413px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-left:129px;
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
        width: 40vw;
        padding: 0;
    }

`

function Capa() {

    const boxRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo("#animacaoCapa", {
            x: -100,           
            opacity: 0,      
        }, {
            x: -0,          
            opacity: 1,   
            duration: 2,  
            stagger: 0.2,
            ease: "power3.out" 
        });

        gsap.fromTo("#animacaoBotaoSrollDown", {
            opacity: 0
        }, {
            opacity: 1,
            duration: 5,
            ease: "power1.out" 
        })
    })

    return ( 
        <SectionCapa background={fundoCapa.src}>
            <DivTitulo>
                <FundoCapa background={fundoCapa.src}>
                    <Titulo id="animacaoCapa" color={cores.MAGENTA} tipografia={fontes.tipografia.gotham} stroke={'true'}>
                        A maior faculdade
                    </Titulo>
                    <Titulo id="animacaoCapa" color={cores.PALTEL_BLUE} tipografia={fontes.tipografia.gotham} stroke={'false'}>
                        de tecnologia
                    </Titulo>
                </FundoCapa>
                <ParagrafoDiv>
                    <Paragrafo id="animacaoCapa" color={cores.PALTEL_BLUE}>
                    Referência em tecnologia e inovação no Brasil, a FIAP é uma faculdade que prepara profissionais para o futuro, com um ensino prático, professores atuantes no mercado e desafios reais que conectam os alunos às grandes empresas. 
                    </Paragrafo>
                </ParagrafoDiv>
            </DivTitulo>

            <BotaoDesceSecao id="animacaoBotaoSrollDown">

            </BotaoDesceSecao>

        </SectionCapa>
     );
}

export default Capa;