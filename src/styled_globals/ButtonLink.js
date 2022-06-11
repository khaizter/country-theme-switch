import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const ButtonLink = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: 1.375rem;
  text-decoration: none;
  font-weight: var(--fw-600);
  padding: 0.75em 1.5em;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.element};
  color: inherit;
`;

export default ButtonLink;
