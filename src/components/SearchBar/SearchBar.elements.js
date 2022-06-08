import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 1rem 1.875rem;
  gap: 0.875rem;
  border-radius: 8px;
  box-shadow: 0 0 10px -5px rgb(0 0 0 / 20%);
  svg {
    display: block;
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  border: none;
  font-size: 0.875rem;
  color: hsl(0, 0%, 52%);
`;
