"use client"

import HotBar from "@/components/Hotbar";
import logo from "@/assets/svg/logo.svg"
import styled from "styled-components";
import { cores } from "@/styles/cores";
import { useEffect, useState } from "react";

interface widthBar {
    width: number
}

const Img = styled.img`
    width: 103px;
    min-height: 30px;
    padding: 25px 0;
`

const Barra = styled.div<widthBar>`
    height:3px;
    width: ${({width}) => width + '%' };
    background-color: ${ cores.MAGENTA };
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
        <div style={{position: 'fixed'}}>
            <HotBar>
                <Img src={logo.src}></Img>
            </HotBar>
            <Barra width={scrollProgress}/>
        </div>
     );
}

export default Header;