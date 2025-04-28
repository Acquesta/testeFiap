import { cores } from "@/styles/cores"
import * as S from "./SubLista.types"
import { fontes } from "@/styles/fontes"

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