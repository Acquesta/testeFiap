import { ParagrafoP } from "./Paragrafo.styles";
import { ParagrafoProps } from "./Paragrafo.types";

function Paragrafo({ children, color } : ParagrafoProps) {
    return ( 
        <ParagrafoP color={color}>
            {children}
        </ParagrafoP>
     );
}

export default Paragrafo;