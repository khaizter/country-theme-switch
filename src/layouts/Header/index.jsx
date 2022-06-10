import React from "react";
import { MainContainer, Logo, Toggle } from "./Header.elements";
import { BsMoon, BsMoonFill } from "react-icons/bs";
import { motion } from "framer-motion";
import MoonIcon from "../../icons/MoonIcon";
import FillMoonIcon from "../../icons/FillMoonIcon";
import styled from "styled-components";

const MotionMoon = motion(MoonIcon);
const MotionFillMoon = motion(FillMoonIcon);

const Header = ({ onToggleTheme }) => {
  return (
    <MainContainer>
      <Logo href="#">Where in the world?</Logo>
      <Toggle onClick={onToggleTheme}>
        <MotionMoon />
        <MotionFillMoon />
        Dark Mode
      </Toggle>
    </MainContainer>
  );
};

export default Header;
