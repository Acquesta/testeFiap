import { cores } from "@/styles/cores"
import { fontes } from "@/styles/fontes"
import * as S from "./SubLista.types"

function SubLista() {
    return (
        <S.SubLista>
            <S.Item color={cores.MAGENTA} icone="'-'" tamanho={fontes.tamanho.mobile.subListas}>Desenvolvimento de Software</S.Item>
            <S.Item color={cores.MAGENTA} icone="'-'" tamanho={fontes.tamanho.mobile.subListas}>Inteligência Artificial</S.Item>
            <S.Item color={cores.MAGENTA} icone="'-'" tamanho={fontes.tamanho.mobile.subListas}>Data</S.Item>
            <S.Item color={cores.MAGENTA} icone="'-'" tamanho={fontes.tamanho.mobile.subListas}>Cibersegurança</S.Item>
        </S.SubLista>
    )
}

export default SubLista;