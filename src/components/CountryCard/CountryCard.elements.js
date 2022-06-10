import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const MainContainer = styled(motion.li)`
  display: block;
  height: 100%;
  margin-inline: auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px -5px rgb(0 0 0 / 20%);
`;

export const Clickable = styled(Link)`
  height: 100%;
  display: block;
  text-decoration: none;
  background-color: ${(props) => props.theme.element};
  color: inherit;
`;

export const Thumbnail = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 278/185;
`;

export const DetailsSection = styled.div`
  padding-inline: 1.875rem;
  padding-bottom: 2.75rem;
  p {
    font-size: 0.875rem;
    margin-block: 0.25rem;
  }
`;

export const Label = styled.span`
  font-weight: var(--fw-600);
`;
