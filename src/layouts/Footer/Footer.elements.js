import styled from "styled-components";
import { device } from "../../styled_globals/Devices";

export const MainContainer = styled.footer`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.foreground};

  a {
    font-weight: var(--fw-600);
    color: gray;
    text-decoration: none;
  }

  @media ${device.tabletS} {
    padding: 2rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;
