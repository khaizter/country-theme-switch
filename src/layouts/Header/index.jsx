import React from "react";
import { MainContainer, Logo, Toggle } from "./Header.elements";
import { BsMoon } from "react-icons/bs";

const Header = ({ onToggleTheme }) => {
  return (
    <MainContainer>
      <Logo href="#">Where in the world?</Logo>
      <Toggle onClick={onToggleTheme}>
        <BsMoon fontSize="1.5rem" />
        Dark Mode
      </Toggle>
    </MainContainer>
  );
};

export default Header;
