import styled from "styled-components";
import { device } from "../../styled_globals/Devices";
import { motion } from "framer-motion";

export const MainContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding-block: 2.5rem;
  padding-inline: 1.25rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.element};
  color: ${(props) => props.theme.foreground};

  @media ${device.tablet} {
    padding-inline: 5%;
    padding-block: 2rem;
  }
`;

export const Logo = styled(motion.a)`
  text-decoration: none;
  font-size: var(--fs-600);
  font-weight: var(--fw-800);
  color: inherit;
  @media ${device.tablet} {
    font-size: var(--fs-700);
  }

  @media ${device.desktop} {
    font-size: var(--fs-800);
  }
`;

export const Toggle = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: none;
  background: none;
  padding: 0;
  color: inherit;
  font-size: var(--fs-400);
  font-weight: var(--fw-600);
  position: relative;
  cursor: pointer;

  svg {
    display: inline-block;
  }

  @media ${device.tablet} {
    font-size: var(--fs-500);
  }

  @media ${device.desktop} {
    font-size: var(--fs-600);
  }
`;
