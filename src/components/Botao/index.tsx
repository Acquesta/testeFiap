import { ButtonBotao } from "./Botao.styles";
import { BotaoProps } from "./Botao.types";

function Botao({ children } : BotaoProps) {
    return ( 
        <ButtonBotao>
            {children}
        </ButtonBotao>
     );
}

export default Botao;