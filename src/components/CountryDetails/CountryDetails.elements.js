import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const DetailsContainer = styled.div`
  display: grid;
`;

export const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 1.375rem;
  width: max-content;
  text-decoration: none;
  color: inherit;
  padding: 0.75rem 1.5rem;
  box-shadow: 0 0 10px -5px;
  margin-right: 0.625rem;
`;

export const Flag = styled.img`
  width: 100%;
`;

export const Label = styled.span`
  font-weight: 600;
`;

export const NativeContainer = styled.div``;

export const TopLevelContainer = styled.div``;

export const BordersContainer = styled.div``;
