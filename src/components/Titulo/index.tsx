"use client"

import React from "react";
import * as T from "./Titulo.styles";

export interface TituloProps{
    children: string,
    color: string,
    tipografia: string,
    stroke: string,
    id?: string
}

function Titulo({ children, color, tipografia, stroke, id } : TituloProps) {
    return ( 
        <T.Titulo id={id} color={ color } tipografia={ tipografia } stroke={stroke == 'true' ? 'true' : 'false'}>
            { children }
        </T.Titulo>
     );
}

export default Titulo;