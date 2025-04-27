"use client"

import HotBar from "@/components/Hotbar";
import logo from "@/assets/svg/logo.svg"
import styled from "styled-components";
import { cores } from "@/styles/cores";
import { useEffect, useState } from "react";

interface widthBar {
    width: number
}

const Logo = styled.img`
    width: 103px;
    min-height: 30px;
    padding: 25px 0;
`

const Barra = styled.div<widthBar>`
    height:3px;
    width: ${({width}) => (width ?? 0) + '%' };
    background-color: ${ cores.MAGENTA };
    transition: width 0.3s ease-out;
`
const DivHeader = styled.div`
    position: fixed;
    top: 0;
    z-index: 10;
`

function Header() {

    const [scrollProgress, setScrollProgress] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / windowHeight) * 100;
            setScrollProgress(progress);
        };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []); 


    return ( 
        <DivHeader>
            <HotBar>
                <Logo src={logo.src}></Logo>
            </HotBar> 
            <Barra 
                width={scrollProgress}  
            />
        </DivHeader>
     );
}

export default Header;