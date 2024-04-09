import NavbarMenuItems from "./NavbarMenuItems/NavbarMenuItems";
import { Logo, LogoTitle, NavbarWrapper } from "./Navbar.styled";

import React from "react";
import myLogo from "../images/myLogo.png";
import Container from "../Container/Container";


const Navbar = () => {
    return (
        <>
            <Container>
            <NavbarWrapper>
                <Logo>
                <img src={myLogo}
                alt="logo"
                width="50"
                height="41"
                loading="lazy"/>
               <LogoTitle>Analytix</LogoTitle>     
            </Logo>
            <NavbarMenuItems />
            </NavbarWrapper>
        
            </Container> 
            
            
        </>
    )
}

export default Navbar;