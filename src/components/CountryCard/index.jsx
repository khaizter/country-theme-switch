import React from "react";
import {
  MainContainer,
  Clickable,
  Thumbnail,
  DetailsSection,
  Label,
} from "./CountryCard.elements";

const CountryCard = ({ data }) => {
  return (
    <MainContainer
      layout
      animate={{ opacity: 1, transition: { ease: "easeInOut" } }}
      initial={{ opacity: 0, transition: { ease: "easeInOut" } }}
      exit={{ opacity: 0, transition: { ease: "easeInOut", duration: 0.07 } }}
      transition={{ layout: { ease: "easeInOut", duration: 0.3 } }}
      whileHover={{ y: -8 }}
    >
      <Clickable to={`/countries/${data.cca2}`}>
        <Thumbnail src={data.flags.png} alt={`${data.name.common} flag`} />
        <DetailsSection>
          <h3>{data.name.common}</h3>
          <p>
            <Label>Population: </Label>
            {data.population}
          </p>
          <p>
            <Label>Region: </Label>
            {data.region}
          </p>
          <p>
            <Label>Capital: </Label>
            {data.capital}
          </p>
        </DetailsSection>
      </Clickable>
    </MainContainer>
  );
};

export default CountryCard;
