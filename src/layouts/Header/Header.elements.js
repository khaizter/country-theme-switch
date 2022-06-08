import styled from "styled-components";

export const MainContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 1.25rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
  background-color: ${(props) => props.theme.element};
  color: ${(props) => props.theme.foreground};
`;

export const Logo = styled.a`
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 800;
  color: inherit;
`;

export const Toggle = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: none;
  background: none;
  padding: 0;
  font-weight: 600;
  color: inherit;

  svg {
    display: inline-block;
  }
`;
