"use client";

import { useState } from "react";
import gsap from "gsap";
import * as A from './Accordion.styles';
import BotaoAccordion from "../BotaoAccordion";

interface AccordionItem {
  title: string;
  content: string;
}

const items: AccordionItem[] = [
  {
    title: "CONEXÃO O MERCADO DE TRABALHO",
    content: "A FIAP se destaca não apenas pelo seu ensino inovador, mas também pela forma como conecta seus alunos ao mercado de trabalho. A instituição tem parcerias com algumas das maiores empresas de tecnologia do mundo, permitindo que seus estudantes participem de desafios reais, hackathons e programas de mentoria. Dessa forma, além de adquirirem conhecimento teórico e prático, os alunos têm a chance de desenvolver networking e garantir oportunidades de estágio e emprego ainda durante o curso. A FIAP compreende que o aprendizado vai além da sala de aula, por isso incentiva projetos interdisciplinares que desafiam a criatividade e a capacidade de resolução de problemas dos futuros profissionais.",
  },
  {
    title: "APRENDIZADO IMERSIVO",
    content: "Outro diferencial da FIAP é a sua estrutura moderna, pensada para proporcionar uma experiência de aprendizado imersiva e dinâmica.  Os laboratórios contam com equipamentos de ponta e softwares atualizados, permitindo que os alunos experimentem na prática as tecnologias que usarão no mercado de trabalho. Além disso, os espaços colaborativos  são projetados para estimular o trabalho em equipe, um fator essencial para profissionais da área de tecnologia. O ambiente acadêmico da FIAP reflete a realidade das grandes empresas do setor, preparando os alunos para os desafios que enfrentarão ao longo da carreira.",
  },
  {
    title: "ENSINO PERSONALIZADO",
    content: "A instituição também aposta na personalização do ensino, oferecendo cursos e trilhas de aprendizado que se adaptam aos diferentes perfis de profissionais. Seja para quem deseja seguir carreira no desenvolvimento de software, na ciência de dados, na segurança cibernética ou até mesmo no empreendedorismo digital, a FIAP possui um programa que atende às necessidades do mercado e às aspirações dos estudantes. Além disso, os cursos são atualizados constantemente para acompanhar as inovações tecnológicas, garantindo que os alunos sempre tenham acesso ao que há de mais recente no setor",
  },
  {
    title: "INOVAÇÃO E TRANSFORMAÇÃO",
    content: "Por fim, a FIAP se destaca por seu compromisso com a inovação e a transformação digital. A faculdade não apenas ensina tecnologia, mas a utiliza para melhorar a experiência de aprendizado, com plataformas interativas, inteligência artificial aplicada ao ensino e metodologias ativas que engajam os alunos. Seu foco é formar profissionais completos, que não apenas dominam ferramentas e linguagens de programação, mas também sabem resolver problemas, inovar e liderar. Seja para quem busca uma primeira formação ou para profissionais que desejam se atualizar, a FIAP se consolidou como uma das melhores instituições do Brasil para quem quer construir uma carreira de sucesso na tecnologia.",
  },
];

function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    const currentId = `#animacaoAccordion${index}`;
    const previousId = openIndex !== null ? `#animacaoAccordion${openIndex}` : null;

    if (openIndex === index) {
      // Fecha o item atual
      gsap.to(currentId, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        margin: "0",
      });
      setOpenIndex(null);
    } else {
      if (previousId) {
        gsap.to(previousId, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          margin: "0",
        });
      }

      const element = document.getElementById(`animacaoAccordion${index}`);
      if (element) {
        element.style.height = "0px";
        const height = element.scrollHeight;
        element.style.height = "0px";

        gsap.to(currentId, {
          height: height,
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
          margin: "40px 0 ",
        });
      }

      setOpenIndex(index);
    }
  };

  return (
    <A.ContainerAccordion>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <A.Item key={index}>
            <A.Title onClick={() => toggleItem(index)}>
              {item.title}
              <A.Icon>
                <BotaoAccordion isOpen={isOpen} />
              </A.Icon>
            </A.Title>
            <A.Content id={`animacaoAccordion${index}`}>
              {item.content}
            </A.Content>
          </A.Item>
        );
      })}
    </A.ContainerAccordion>
  );
}

export default Accordion;
