import { BotaoDesce, DivBotao, LegendaBotao } from "./BotaoDesceSecao.styles";
import Svgbotao from "@/assets/svg/scroll-down-arrow.svg"

function BotaoDesceSecao(){
    return(
        <DivBotao>
            <LegendaBotao>
                Srcoll down
            </LegendaBotao>
            <BotaoDesce>
                <img src={Svgbotao.src}></img>
            </BotaoDesce>    
        </DivBotao>
    )
}

export default BotaoDesceSecao;