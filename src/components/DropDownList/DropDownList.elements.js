import styled from "styled-components";
import { device } from "../../styled_globals/Devices";
import { motion } from "framer-motion";

export const MainContainer = styled.div`
  align-self: flex-start;
  position: relative;
  color: ${(props) => props.theme.foreground};
`;

export const Toggle = styled(motion.button)`
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1.25rem;
  padding-inline: 1.875rem;
  font-size: var(--fs-300);
  min-width: 15.875rem;
  border-radius: 8px;
  box-shadow: 0 0 20px rgb(0 0 0 / 20%);
  background-color: ${(props) => props.theme.element};
  color: inherit;
  svg {
    display: block;
    margin-left: 5rem;
  }
  @media ${device.tablet} {
    padding-inline: 1.5rem;
  }
`;

export const List = styled(motion.ul)`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100%;
  margin: 0;
  padding-inline: 0;
  list-style: none;
  border-radius: 8px;
  box-shadow: 0 0 20px rgb(0 0 0 / 20%);
  background-color: ${(props) => props.theme.element};
  overflow: hidden;
`;

export const ListItem = styled.li`
  &:first-child {
    margin-top: 0.25rem;
  }
  &:last-child {
    margin-bottom: 0.25rem;
  }
`;

export const ItemButton = styled(motion.button)`
  text-align: start;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  display: block;
  width: 100%;
  padding-block: 0.625rem;
  padding-inline: 1.875rem;
  font-size: var(--fs-300);
  color: inherit;
  @media ${device.tablet} {
    padding-inline: 1.5rem;
  }
`;
