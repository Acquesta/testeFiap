"use client"

import Capa from "@/sections/Capa";
import EducacaoETech from "@/sections/EducacaoETech";
import Header from "@/sections/Header";
import { GlobalStyle } from "@/styles/GlobalStyle";



export default function Home() {
  return (
    < >
      <GlobalStyle />
      <Header /> 
      <Capa />
      <EducacaoETech />
    </>
  );
}
