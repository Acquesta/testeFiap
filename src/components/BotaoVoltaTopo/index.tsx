// ScrollTopButton.tsx
"use client";

import { useEffect, useState } from "react";
import { ButtonVoltaTopo } from "./BotaoVoltaTopo.styles";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import scrollUp from "@/assets/svg/scroll-up-arrow.svg"

gsap.registerPlugin(ScrollToPlugin);

function ScrollTopButton(){
  const [isVisible, setIsVisible] = useState(false);

  function handleScroll() {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    setIsVisible(scrollTop > viewportHeight);
  };

  function scrollToTop() {
    gsap.to(window, { duration: 1, scrollTo: { y: 0 }, ease: "power2.out" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ButtonVoltaTopo $visivel={isVisible} onClick={scrollToTop}>
      <img src={scrollUp.src} alt="" />
    </ButtonVoltaTopo>
  );
};

export default ScrollTopButton;
