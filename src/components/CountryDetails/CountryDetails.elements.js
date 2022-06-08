import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 16px;
  color: ${(props) => props.theme.foreground};
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
  font-weight: ${(props) => (props.lower ? "300" : "600")};
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  box-shadow: 0 0 ${(props) => (props.lower ? "5px" : "20px")}
    rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.element};
  color: inherit;
`;

export const Flag = styled.img`
  width: 100%;
  aspect-ratio: 278/185;
`;

export const Label = styled.span`
  font-weight: 600;
`;

export const NativeSection = styled.section``;

export const TopLevelSection = styled.section``;

export const BordersSection = styled.section``;

export const BordersButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
`;
