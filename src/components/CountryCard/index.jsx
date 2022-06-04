import React from "react";
import { StyledCountryCard, Thumbnail, Details } from "./CountryCard.styled";

const CountryCard = ({ data }) => {
  return (
    <StyledCountryCard>
      <Thumbnail src={data.flags.png} alt={`${data.name.official} flag`} />
      <Details>
        <h3>{data.name.official}</h3>
        <p>
          <strong>Population: </strong>
          {data.population}
        </p>
        <p>
          <strong>Region: </strong>
          {data.region}
        </p>
        <p>
          <strong>Capital: </strong>
          {data.capital}
        </p>
      </Details>
    </StyledCountryCard>
  );
};

export default CountryCard;
