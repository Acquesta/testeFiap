"use client"

import styled from "styled-components";
import { cores } from "@/styles/cores";

interface HotbarProps {
    children: object
}

export const hotbar = styled.div<HotbarProps>`
    width:100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${ cores.CHINESE_BLACK }
`
