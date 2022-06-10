import styled from "styled-components";

export const MainContainer = styled.div`
  flex-basis: 40%;
  max-width: 28rem;
  display: flex;
  align-items: center;
  padding: 1rem 1.875rem;
  gap: 0.875rem;
  border-radius: 8px;
  box-shadow: 0 0 20px rgb(0 0 0 / 20%);
  background-color: ${(props) => props.theme.element};
  svg {
    color: ${(props) => props.theme.input};
    display: block;
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  border: none;
  font-size: var(--fs-300);
  background: none;
  outline: none;
  color: ${(props) => props.theme.input};
  ::placeholder {
    color: ${(props) => props.theme.input};
  }
`;
