import styled from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  max-width: 15.5rem;
`;

export const Toggle = styled.button`
  border: none;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.875rem;
  font-size: 0.875rem;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 10px -5px rgb(0 0 0 / 20%);
  svg {
    display: block;
  }
`;

export const List = styled.ul`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  background-color: white;
  width: 100%;
  margin: 0;
  padding: 0.25rem;
  list-style: none;
  border-radius: 8px;
  box-shadow: 0 0 10px -5px rgb(0 0 0 / 20%);
`;

export const Item = styled.button`
  text-align: start;
  background-color: white;
  border: none;
  display: block;
  width: 100%;
  padding: 0.625rem 1.625rem;
  font-size: 0.75rem;
`;
