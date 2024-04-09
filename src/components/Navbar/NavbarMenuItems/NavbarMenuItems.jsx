import React, { useState } from "react";
import User from "../../images/avatar/User.png";
import Icon from "../../images/avatar/Icon.png";
import clipboardText from "../../images/avatar/clipboardText.png";
import userProfile from "../../images/avatar/userProfile.png";
import creditCard from "../../images/avatar/creditCard.png";
import CircleWavy from "../../images/avatar/CircleWavy.png";

import { CategoryList, Image, TitleNavLink } from "./NavbarMenuItems.styled";

const menuItems = [
    {
        avatar: User,
        text: "Menedżer",
        link: "/"
    },
    {
        avatar: Icon,
        text: "Użytkownicy",
        link: "/użytkownicy"
    },
    {
        avatar: clipboardText,
        text: "Oferuje",
        link: "/oferuje"
    },
    {
        avatar: userProfile,
        text: "Profil",
        link: "/profil"
    },
    {
        avatar: creditCard,
        text: "Balansować",
        link: "/balansować"
    },
    {
        avatar: CircleWavy,
        text: "Pomoc techniczna",
        link: "/pomoc techniczna"
    }
]

const NavbarMenuItems = () => {
   
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index);
    }

    return (
    <>
      <ul>
        {menuItems.map((item, index) => (
          <CategoryList
            key={index}
            onClick={() => handleClick(index)}
            style={{
                color: activeIndex === index ? "#A3AED0" : "#000000",
            }}
          >
            <Image
              src={item.avatar}
              style={{
                  filter: activeIndex === index ? "invert(1)" : "invert(0)",
              }}/>
                <TitleNavLink
                    to={item.link}>{item.text}</TitleNavLink >
          </CategoryList>
        ))}
      </ul>
    </>
  );
}

export default NavbarMenuItems;