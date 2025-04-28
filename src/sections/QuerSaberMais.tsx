import Botao from "@/components/Botao";
import Titulo from "@/components/Titulo";
import { cores } from "@/styles/cores";
import { fontes } from "@/styles/fontes";
import styled from "styled-components";

const SectionQuerSaeberMais = styled.section`
    background-color: ${cores.BLACK};
    padding: 100px 24px;
    text-align: center;
`

function QuerSaberMais() {
    return ( 
        <SectionQuerSaeberMais>
            <Titulo color={cores.PALTEL_BLUE} tipografia={fontes.tipografia.gotham} stroke="false">
                Quer saber mais?
            </Titulo>
            <Botao>
                Entre em contato
            </Botao>
        </SectionQuerSaeberMais>
     );
}

export default QuerSaberMais;