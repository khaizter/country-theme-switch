import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCountryCard = styled(Link)`
  text-decoration: none;
  color: inherit;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 20px -15px;
`;

export const Thumbnail = styled.img`
  display: block;
  width: 100%;
`;

export const Details = styled.div`
  background-color: white;
  padding: 1rem 1.875rem;
  padding-bottom: 2.75rem;
  p {
    font-size: 0.875rem;
    margin-block: 0.25rem;
  }
`;
