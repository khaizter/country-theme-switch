import React from "react";
import { MainContainer, Logo, Toggle } from "./Header.elements";
import MoonIcon from "../../icons/MoonIcon";

const Header = ({ onToggleTheme }) => {
  return (
    <MainContainer>
      <Logo whileHover={{ scale: 1.05 }} href="#">
        Where in the world?
      </Logo>
      <Toggle whileHover={{ scale: 1.05 }} onClick={onToggleTheme}>
        <MoonIcon />
        Dark Mode
      </Toggle>
    </MainContainer>
  );
};

export default Header;
