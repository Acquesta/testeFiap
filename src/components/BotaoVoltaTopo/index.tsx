// ScrollTopButton.tsx
"use client";

import { useEffect, useState } from "react";
import * as B from "./BotaoVoltaTopo.styles";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import scrollUp from "@/assets/svg/scroll-up-arrow.svg"

gsap.registerPlugin(ScrollToPlugin);

function BotaoVoltaTopo(){
  const [isVisible, setIsVisible] = useState(false);

  function scroll() {
    const scrollTop = window.scrollY;
    const tamanhoTela = window.innerHeight;
    setIsVisible(scrollTop > tamanhoTela);
  };

  function scrollToTop() {
    gsap.to(window, { duration: 1, scrollTo: { y: 0 }, ease: "power2.out" });
  };


  return (
    <B.Button $visivel={isVisible} onClick={scrollToTop}>
      <img src={scrollUp.src} alt="" />
    </B.Button>
  );
};

export default BotaoVoltaTopo;
