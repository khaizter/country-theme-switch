import styled from "styled-components";
import { device } from "../../styled_globals/Devices";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-block: 1.875rem;
  padding-inline: 1.25rem;
  gap: 2.5rem;
  color: ${(props) => props.theme.foreground};
  @media ${device.tablet} {
    padding-inline: 5%;
    padding-block: 3rem;
    gap: 3rem;
  }
`;
