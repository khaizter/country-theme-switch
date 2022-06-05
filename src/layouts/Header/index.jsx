import React from "react";
import { HeaderContainer, Logo, Toggle } from "./Header.elements";
import { BsMoon } from "react-icons/bs";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo href="#">Where in the world?</Logo>
      <Toggle>
        <BsMoon fontSize="1.5rem" />
        Dark Mode
      </Toggle>
    </HeaderContainer>
  );
};

export default Header;
