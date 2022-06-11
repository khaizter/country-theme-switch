import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../styled_globals/Devices";
export const Page = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 2.5rem;
  @media ${device.tablet} {
    gap: 3rem;
  }
`;
