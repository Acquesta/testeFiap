"use client";

import { useEffect, useRef } from "react";
import * as B from './BotaoAccordion.styles';
import gsap from "gsap";

interface BotaoAccordionProps {
  isOpen: boolean;
}

function BotaoAccordion({ isOpen }: BotaoAccordionProps) {
  const verticalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (verticalRef.current) {
      gsap.to(verticalRef.current, {
        duration: 0.3,
        rotateZ: isOpen ? 90 : 0,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  return (
    <B.Button>
      <B.HorizontalBar />
      <B.VerticalBar ref={verticalRef} />
    </B.Button>
  );
}

export default BotaoAccordion;
