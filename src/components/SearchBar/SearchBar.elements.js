import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.875rem;
  gap: 0.875rem;
  border-radius: 8px;
  box-shadow: 0 0 10px -5px rgb(0 0 0 / 20%);
  background-color: ${(props) => props.theme.element};
  svg {
    color: ${(props) => props.theme.input};
    display: block;
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  border: none;
  font-size: 0.875rem;
  background: none;
  color: ${(props) => props.theme.input};
  ::placeholder {
    color: ${(props) => props.theme.input};
  }
`;
