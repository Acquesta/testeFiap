import * as P from "./Paragrafo.styles";

export interface ParagrafoProps {
    children: string,
    color: string,
    id?: string
}

function Paragrafo({ children, color, id } : ParagrafoProps) {
    return ( 
        <P.Paragrafo id={id} color={color}>
            {children}
        </P.Paragrafo>
     );
}

export default Paragrafo;