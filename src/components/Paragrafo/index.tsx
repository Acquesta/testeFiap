import { ParagrafoP } from "./Paragrafo.styles";

export interface ParagrafoProps {
    children: string,
    color: string,
    id?: string
}

function Paragrafo({ children, color, id } : ParagrafoProps) {
    return ( 
        <ParagrafoP id={id} color={color}>
            {children}
        </ParagrafoP>
     );
}

export default Paragrafo;