import React from "react";
import { StyledHeader, StyledLogo, StyledToggleTheme } from "./Header.styled";
import { BsMoon } from "react-icons/bs";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo href="#">Where in the world?</StyledLogo>
      <StyledToggleTheme>
        <BsMoon fontSize="1.5rem" />
        Dark Mode
      </StyledToggleTheme>
    </StyledHeader>
  );
};

export default Header;
