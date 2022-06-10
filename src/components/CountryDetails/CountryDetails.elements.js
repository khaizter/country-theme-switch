import styled from "styled-components";
import { device } from "../../styled_globals/Devices";
import ButtonLink from "../../styled_globals/ButtonLink";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  color: ${(props) => props.theme.foreground};

  @media ${device.laptop} {
    flex-direction: row;
    gap: 5%;
  }

  @media ${device.desktop} {
    gap: 10%;
  }
`;

export const Flag = styled.img`
  display: block;
  aspect-ratio: 278/185;
  flex-grow: 1;
  align-self: stretch;
  @media ${device.tabletS} {
    width: min(80%, 33.125rem);
    align-self: center;
  }
  @media ${device.laptop} {
    align-self: flex-start;
    aspect-ratio: 280/201;
  }
`;

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-areas:
    "heading"
    "left-section"
    "right-section"
    "bottom-section";
  @media ${device.tabletS} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content 1fr max-content;
    grid-template-areas:
      "heading heading"
      "left-section right-section"
      "bottom-section bottom-section";
  }

  @media ${device.laptop} {
    align-self: center;
    width: 50%;
  }
`;

export const Label = styled.span`
  font-weight: var(--fw-600);
`;

export const CountryHeading = styled.h2`
  grid-area: heading;
`;

export const NativeSection = styled.section`
  grid-area: left-section;
`;

export const TopLevelSection = styled.section`
  grid-area: right-section;
`;

export const BordersSection = styled.section`
  grid-area: bottom-section;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const BordersButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
`;

export const BorderButton = styled(ButtonLink)`
  padding-block: 0.5rem;
  font-weight: var(--fw-300);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;
