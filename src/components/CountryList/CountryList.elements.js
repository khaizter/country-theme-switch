import styled from "styled-components";
import { device } from "../../styled_globals/Devices";

export const ListContainer = styled.ul`
  align-self: stretch;
  list-style: none;
  margin: 0;
  padding-inline: 3rem;
  display: grid;
  grid-gap: 3.125rem;
  grid-template-columns: repeat(auto-fill, minmax(14.375rem, 1fr));

  @media ${device.laptop} {
    padding-inline: 0;
  }
`;

export const FilterSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
