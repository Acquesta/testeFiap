import Accordion from "@/components/Accordion";
import Titulo from "@/components/Titulo";
import { cores } from "@/styles/cores";
import { fontes } from "@/styles/fontes";
import styled from "styled-components";

const SectionNossaEstrutura = styled.section`
    background: radial-gradient(circle, ${cores.SPANISH + '80'},  transparent 50%), black;
    padding: 100px 24px;

    @media (min-width: 720px) {
        padding: 200px 129px;
        background: radial-gradient(circle at 100% 60%, ${cores.SPANISH + '80'},  transparent 20%), radial-gradient(circle at 0% 40%, ${cores.SPANISH + '80'} ,  transparent 20%), black;
        
    }
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