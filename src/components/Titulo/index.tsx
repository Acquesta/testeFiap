"use client"

import { TituloProps } from "./Titulo.types";
import { TituloPrincipal } from "./Titulo.styles";

function Titulo({ children, color, tipografia, stroke } : TituloProps) {
    return ( 
        <TituloPrincipal color={ color } tipografia={ tipografia } stroke={stroke == 'true' ? 'true' : 'false'}>
            { children }
        </TituloPrincipal>
     );
}

export default Titulo;