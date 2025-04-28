import * as B from "./BotaoDesceSecao.styles";
import Svgbotao from "@/assets/svg/scroll-down-arrow.svg"

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

interface BotaoDesceSecaoProps{
    id?: string
}

function BotaoDesceSecao({ id } : BotaoDesceSecaoProps){

    const desceSecao = (id: string) => {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: `#${id}` },
          ease: "power2.out",
        });
      };

    return(
        <B.DivBotao id={id}>
            <B.LegendaBotao>
                Srcoll down
            </B.LegendaBotao>
            <B.BotaoDesce onClick={() => desceSecao("Capa")}>
                <img src={Svgbotao.src}></img>
            </B.BotaoDesce>    
        </B.DivBotao>
    )
}

export default BotaoDesceSecao;