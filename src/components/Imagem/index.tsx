"use client";

import { useState } from "react";
import * as I from './Imagem.styles'
import botaoFehar from '@/assets/svg/btn-fechar.svg'

function Imagem({ src, alt, legenda }: ImagemProps) {
  const [ativo, setAtivo] = useState(false);

  return (
    <>
        <I.DivImagem>
            <I.Thumbnail onClick={() => setAtivo(true)} src={src} alt={alt} />
            <I.legendaImagem>
                { legenda }
            </I.legendaImagem>
        </I.DivImagem>
        {ativo && (
            <I.Overlay>
                <I.BotaoFechar onClick={() => setAtivo(false)}>
                    <img src={botaoFehar.src} alt="" />
                </I.BotaoFechar>
                <I.Modal  onClick={() => setAtivo(false)}>
                    <I.ModalImagem src={src} alt={alt} />
                </I.Modal>
            </I.Overlay>
        )}
    </>
  );
}

export default Imagem;