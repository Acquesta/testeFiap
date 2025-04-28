import Accordion from "@/components/Accordion";
import Titulo from "@/components/Titulo";
import { cores } from "@/styles/cores";
import { fontes } from "@/styles/fontes";
import styled from "styled-components";

const SectionNossaEstrutura = styled.section`
    background-color: ${cores.BLACK};
    background: radial-gradient(circle, #002b49,  rgba(0, 0, 0, 1));
    padding: 100px 24px;
`

function NossaEstrutura() {
    return ( 
        <SectionNossaEstrutura>
            <Titulo color={cores.PALTEL_BLUE} tipografia={fontes.tipografia.gotham} stroke="false">
                Nossa estrutura
            </Titulo>
            <Accordion />
        </SectionNossaEstrutura>
     );
}

export default NossaEstrutura;