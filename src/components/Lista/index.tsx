import { cores } from "@/styles/cores"
import * as L from "./Lista.styles"
import { fontes } from "@/styles/fontes"
import SubLista from "../SubLista";

function Lista() {
    return (
        <L.Lista>
            <L.Item color={cores.DAVYS_GREY} icone="'/'" tamanho={fontes.tamanho.mobile.listas}>Tecnologia e Desenvolvimento</L.Item>
            <L.Item color={cores.DAVYS_GREY} icone="" tamanho={fontes.tamanho.mobile.listas}>
                <SubLista />
            </L.Item>
            <L.Item color={cores.DAVYS_GREY} icone="'/'" tamanho={fontes.tamanho.mobile.listas}>UX/UI, Marketing Digital</L.Item>
            <L.Item color={cores.DAVYS_GREY} icone="'/'" tamanho={fontes.tamanho.mobile.listas}>Metodologias e Gestão</L.Item>
        </L.Lista>
    )
}

export default Lista;