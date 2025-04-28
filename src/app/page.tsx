"use client"

import ScrollTopButton from "@/components/BotaoVoltaTopo";
import BreakImage from "@/sections/BreakImage";
import Capa from "@/sections/Capa";
import EducacaoETech from "@/sections/EducacaoETech";
import Header from "@/sections/Header";
import NossaEstrutura from "@/sections/NossaEstrutura";
import QuerSaberMais from "@/sections/QuerSaberMais";
import { GlobalStyle } from "@/styles/GlobalStyle";

import localFont from 'next/font/local'

const gotham = localFont({
  src: [
    { path: '../../public/fonts/Gotham/GothamHTF-Thin.otf', weight: '100', style: 'normal' },
    { path: '../../public/fonts/Gotham/GothamHTF-XLight.otf', weight: '200', style: 'normal' },
    { path: '../../public/fonts/Gotham/GothamHTF-Light.otf', weight: '300', style: 'normal' },
    { path: '../../public/fonts/Gotham/GothamHTF-Book.otf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Gotham/GothamHTF-Medium.otf', weight: '500', style: 'normal' },
    { path: '../../public/fonts/Gotham/GothamHTF-Bold.otf', weight: '700', style: 'normal' },
    { path: '../../public/fonts/Gotham/GothamHTF-Black.otf', weight: '900', style: 'normal' },
    { path: '../../public/fonts/Gotham/GothamHTF-Ultra.otf', weight: '950', style: 'normal' },
  ],
  variable: '--font-gotham',
  display: 'swap',
})

const roboto = localFont({
  src: [
    { path: '../../public/fonts/roboto/roboto-thin.ttf', weight: '100', style: 'normal' },
    { path: '../../public/fonts/roboto/roboto-thinItalic.ttf', weight: '100', style: 'italic' },
    { path: '../../public/fonts/roboto/roboto-light.ttf', weight: '300', style: 'normal' },
    { path: '../../public/fonts/roboto/roboto-lightItalic.ttf', weight: '300', style: 'italic' },
    { path: '../../public/fonts/roboto/roboto-regular.ttf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/roboto/roboto-italic.ttf', weight: '400', style: 'italic' },
    { path: '../../public/fonts/roboto/roboto-medium.ttf', weight: '500', style: 'normal' },
    { path: '../../public/fonts/roboto/roboto-mediumItalic.ttf', weight: '500', style: 'italic' },
    { path: '../../public/fonts/roboto/roboto-bold.ttf', weight: '700', style: 'normal' },
    { path: '../../public/fonts/roboto/roboto-boldItalic.ttf', weight: '700', style: 'italic' },
    { path: '../../public/fonts/roboto/roboto-black.ttf', weight: '900', style: 'normal' },
    { path: '../../public/fonts/roboto/roboto-blackItalic.ttf', weight: '900', style: 'italic' },
  ],
  variable: '--font-roboto',
  display: 'swap',
});

export default function Home() {
  return (
    <main className={`${gotham.className}, ${roboto.className}`}>
      <GlobalStyle />
      <ScrollTopButton />
      <Header /> 
      <Capa />
      <EducacaoETech />
      <BreakImage />
      <NossaEstrutura />
      <QuerSaberMais />
    </main>
  );
}
