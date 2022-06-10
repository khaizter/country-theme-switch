import styled from "styled-components";
import { device } from "../../styled_globals/Devices";

export const MainContainer = styled.div`
  align-self: flex-start;
  position: relative;
  color: ${(props) => props.theme.foreground};
`;

export const Toggle = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1.25rem;
  padding-inline: 1.875rem;
  font-size: var(--fs-300);
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 10px -5px rgb(0 0 0 / 20%);
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

export const List = styled.ul`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100%;
  margin: 0;
  padding-block: 0.25rem;
  padding-inline: 0;
  list-style: none;
  border-radius: 8px;
  box-shadow: 0 0 10px -5px rgb(0 0 0 / 20%);
  background-color: ${(props) => props.theme.element};
`;

export const Item = styled.button`
  text-align: start;
  background: none;
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
