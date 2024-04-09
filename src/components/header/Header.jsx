import React from "react";
import { Item, List, Title, Image, ContentWrapper } from "./Header.styled";
import headerIcon from "../images/headerIcon.png";
const headerItems = ["Strona", "Inni", "Indeksy", "Poczta"];


const Header = () => {
    return (
         <ContentWrapper>
        
            <Item>
                {
                    headerItems.map((item, index) => (
                        <List key={index}>
                            <Title>{item}</Title>
                            <Image src={headerIcon}
                            alt="headerIcon"
                            width="35"
                            height="42"/>
                        </List>
               ))     
            }
            </Item>
          
              </ContentWrapper>
    )
}

export default Header;