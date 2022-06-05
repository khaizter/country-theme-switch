import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 1.25rem;
  box-shadow: 0 0 20px -15px;
`;

export const Logo = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1.25rem;
  font-weight: 800;
`;

export const Toggle = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  border: none;
  background: none;
  padding: 0;
  font-weight: 600;

  svg {
    display: inline-block;
  }
`;
