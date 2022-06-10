import styled from "styled-components";
import { Link } from "react-router-dom";
const ButtonLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 1.375rem;
  text-decoration: none;
  font-weight: var(--fw-600);
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.element};
  color: inherit;
`;

export default ButtonLink;
