import React from "react";
import {
  MainContainer,
  Thumbnail,
  DetailsSection,
  Label,
} from "./CountryCard.elements";

const CountryCard = ({ data }) => {
  const clickHandler = () => {
    console.log(data);
  };

  return (
    <MainContainer to={`/countries/${data.cca2}`} onClick={clickHandler}>
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
    </MainContainer>
  );
};

export default CountryCard;
