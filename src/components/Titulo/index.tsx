"use client"

import React from "react";
import { TituloPrincipal } from "./Titulo.styles";

export interface TituloProps{
    children: string,
    color: string,
    tipografia: string,
    stroke: string,
    id?: string
}

function Titulo({ children, color, tipografia, stroke, id } : TituloProps) {
    return ( 
        <TituloPrincipal id={id} color={ color } tipografia={ tipografia } stroke={stroke == 'true' ? 'true' : 'false'}>
            { children }
        </TituloPrincipal>
     );
}

export default Titulo;