import Imagem from "@/components/Imagem";
import Paragrafo from "@/components/Paragrafo";
import Titulo from "@/components/Titulo";
import { cores } from "@/styles/cores";
import { fontes } from "@/styles/fontes";
import styled from "styled-components";
import fiapNext from "@/assets/imgs/fiap-next.jpg"

interface ItemProps{
    color: string;
    icone: string;
    tamanho: string;
}

const SectionEducacaoETech = styled.section`
    display: flex;
    flex-direction:column;
    gap: 50px;
    padding: 100px 24px 100px 24px;
`

const Lista = styled.ul`
  list-style: none; 
  padding: 0;
  display: flex;
  flex-direction: column;
  gap:30px;
`;

const Item = styled.ul<ItemProps>`
  position: relative;
  padding-left: 20px;
  color: ${({color}) => color};
  font-family: ${fontes.tipografia.gotham};
  font-size: ${({tamanho}) => tamanho};
  line-height: 20px;
  font-weight: 300;
  

  &::before {
    content: ${({icone}) => icone};
    position: absolute;
    left: 0;
    color: ${cores.MAGENTA}; 
    font-weight: bold;
  }
`;

const DivCursos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`


function EducacaoETech() {
    return ( 

        <SectionEducacaoETech>
            <Titulo color={cores.CHINESE_BLACK} tipografia={fontes.tipografia.gotham} stroke='false'>
                Educação e Tech
            </Titulo>
            <Paragrafo color={cores.DAVYS_GREY}>
                A FIAP é muito mais do que uma faculdade de tecnologia, é um verdadeiro ecossistema de inovação e aprendizado. Conhecida por sua abordagem moderna e focada no mercado, a instituição é referência quando se trata de formar profissionais capacitados para os desafios do futuro. Seja na graduação, pós-graduação ou cursos livres, a FIAP entrega um ensino que mistura teoria e prática, preparando os alunos para atuar em empresas de ponta ou até mesmo empreender.
            </Paragrafo>
            <Imagem src={fiapNext.src} alt="Logotipo da FIAP NEXT" legenda="Figura 1 - Logotipo da FIAP NEXT" />
            <DivCursos>
                <Paragrafo color={cores.DAVYS_GREY}>
                    Com um corpo docente formado por profissionais atuantes no mercado, a FIAP não ensina apenas tecnologia, mas também negócios, inovação e liderança. Seus cursos abrangem DivCursosersas áreas, incluindo: 
                </Paragrafo>
                <Lista>
                    <Item color={cores.DAVYS_GREY} icone="'/'" tamanho={fontes.tamanho.mobile.listas}>Tecnologia e Desenvolvimento</Item>
                    <Item color={cores.DAVYS_GREY} icone="" tamanho={fontes.tamanho.mobile.listas}>
                        <Lista>
                            <Item color={cores.MAGENTA} icone="'-'" tamanho={fontes.tamanho.mobile.subListas}>Desenvolvimento de Software</Item>
                            <Item color={cores.MAGENTA} icone="'-'" tamanho={fontes.tamanho.mobile.subListas}>Inteligência Artificial</Item>
                            <Item color={cores.MAGENTA} icone="'-'" tamanho={fontes.tamanho.mobile.subListas}>Data</Item>
                            <Item color={cores.MAGENTA} icone="'-'" tamanho={fontes.tamanho.mobile.subListas}>Cibersegurança</Item>
                        </Lista>
                    </Item>
                    <Item color={cores.DAVYS_GREY} icone="'/'" tamanho={fontes.tamanho.mobile.listas}>UX/UI, Marketing Digital</Item>
                    <Item color={cores.DAVYS_GREY} icone="'/'" tamanho={fontes.tamanho.mobile.listas}>Metodologias e Gestão</Item>
                </Lista>
                <Paragrafo color={cores.DAVYS_GREY}>
                    Além disso, a instituição incentiva fortemente o uso dessas metodologias e outras abordagens inovadoras que fazem parte do dia a dia de grandes empresas.
                </Paragrafo>
            </DivCursos>
        </SectionEducacaoETech>
    
     );
}

export default EducacaoETech;