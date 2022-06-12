import styled from "styled-components";
import { device } from "../../styled_globals/Devices";
import { motion } from "framer-motion";

export const ListContainer = styled(motion.ul)`
  align-self: stretch;
  list-style: none;
  padding-inline: 1rem;
  margin: 0;
  display: grid;
  grid-gap: 3.125rem;
  grid-template-columns: repeat(auto-fill, minmax(14.375rem, 1fr));

  @media ${device.mobileM} {
    padding-inline: 3rem;
  }

  @media ${device.laptop} {
    padding-inline: 0;
  }
`;

export const FilterContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
