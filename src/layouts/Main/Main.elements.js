import styled from "styled-components";
import { device } from "../../styled_globals/Devices";

export const MainContainer = styled.main`
  padding-block: 1.875rem;
  padding-inline: 1.25rem;
  color: ${(props) => props.theme.foreground};
  @media ${device.tablet} {
    padding-inline: 5%;
    padding-block: 3rem;
    gap: 3rem;
  }
`;
