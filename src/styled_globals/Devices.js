const size = {
  mobileS: "20em",
  mobileM: "23.4375em",
  mobileL: "26.5625em",
  tabletS: "37.5em",
  tablet: "48em",
  laptop: "64em",
  desktop: "90em",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tabletS: `(min-width: ${size.tabletS})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};
