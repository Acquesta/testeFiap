import { ButtonBotao } from "./Botao.styles";

interface BotaoProps{
    children: string
}

function Botao({ children } : BotaoProps) {
    return ( 
        <ButtonBotao>
            {children}
        </ButtonBotao>
     );
}

export default Botao;