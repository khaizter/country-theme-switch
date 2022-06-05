import React from "react";
import { StyledCountryCard, Thumbnail, Details } from "./CountryCard.styled";

const CountryCard = ({ data }) => {
  const clickHandler = () => {
    console.log(data);
  };

  return (
    <StyledCountryCard to={`/countries/${data.cca2}`} onClick={clickHandler}>
      <Thumbnail src={data.flags.png} alt={`${data.name.official} flag`} />
      <Details>
        <h3>{data.name.common}</h3>
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
