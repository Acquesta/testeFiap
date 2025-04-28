import Imagem from "@/components/Imagem";
import Paragrafo from "@/components/Paragrafo";
import Titulo from "@/components/Titulo";
import { cores } from "@/styles/cores";
import { fontes } from "@/styles/fontes";
import styled from "styled-components";
import fiapNext from "@/assets/imgs/fiap-next.jpg"
import Lista from "@/components/Lista";


const SectionEducacaoETech = styled.section`
    display: flex;
    flex-direction:column;
    gap: 50px;
    padding: 100px 24px 100px 24px;

    @media (min-width: 413px) {
        padding : 179px 129px;
    }
`

const DivCursos = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (min-width: 1200px) {
        width: 50%;
    }
`

const DivConteudo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    gap: 50px;

    @media (min-width: 1200px) {
        gap: 120px;
        flex-direction: row;
        padding: 0 100px;
    }
`


function EducacaoETech() {
    return ( 
        <SectionEducacaoETech id="Capa">
            <Titulo color={cores.CHINESE_BLACK} tipografia={fontes.tipografia.gotham} stroke='false'>
                Educação e Tech
            </Titulo>
            <DivConteudo>
                <DivCursos>
                    <Paragrafo color={cores.DAVYS_GREY}>
                        A FIAP é muito mais do que uma faculdade de tecnologia, é um verdadeiro ecossistema de inovação e aprendizado. Conhecida por sua abordagem moderna e focada no mercado, a instituição é referência quando se trata de formar profissionais capacitados para os desafios do futuro. Seja na graduação, pós-graduação ou cursos livres, a FIAP entrega um ensino que mistura teoria e prática, preparando os alunos para atuar em empresas de ponta ou até mesmo empreender.
                    </Paragrafo>
                    <Imagem src={fiapNext.src} alt="Logotipo da FIAP NEXT" legenda="Figura 1 - Logotipo da FIAP NEXT" />
                </DivCursos>
                <DivCursos>
                    <Paragrafo color={cores.DAVYS_GREY}>
                        Com um corpo docente formado por profissionais atuantes no mercado, a FIAP não ensina apenas tecnologia, mas também negócios, inovação e liderança. Seus cursos abrangem DivCursosersas áreas, incluindo: 
                    </Paragrafo>
                    <Lista>

                    </Lista>
                    <Paragrafo color={cores.DAVYS_GREY}>
                        Além disso, a instituição incentiva fortemente o uso dessas metodologias e outras abordagens inovadoras que fazem parte do dia a dia de grandes empresas.
                    </Paragrafo>
                </DivCursos>
            </DivConteudo>
        </SectionEducacaoETech>
     );
}

export default EducacaoETech;