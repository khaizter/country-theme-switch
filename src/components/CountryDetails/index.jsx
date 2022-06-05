import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CgArrowLeft } from "react-icons/cg";
import {
  MainContainer,
  Button,
  Flag,
  Label,
  DetailsContainer,
  NativeContainer,
  TopLevelContainer,
  BordersContainer,
} from "./CountryDetails.elements";

const CountryDetails = () => {
  const { countryId } = useParams();
  const [data, setData] = useState(null);
  const [borderCountries, setBorderCountries] = useState(null);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/`, {
        params: { codes: countryId },
      })
      .then((res) => setData(res.data[0]));
  }, []);

  useEffect(() => {
    if (!data || borderCountries) {
      return;
    }
    axios
      .get(`https://restcountries.com/v3.1/alpha/`, {
        params: { codes: data.borders.join(",") },
      })
      .then((res) => setBorderCountries(res.data));
  }, [data]);

  console.log(data);
  console.log(borderCountries);

  if (!data || !borderCountries) {
    return <div>no data yet</div>;
  }

  const flagSrc = data.flags.png;
  const name = data.name.official;
  const nativeName = data.name.common;
  const population = data.population;
  const region = data.region;
  const subRegion = data.subregion;
  const capital = data.capital;
  const topLevelDomain = data.tld[0];
  const currencies = Object.keys(data.currencies).map(
    (currencyKeys) => data.currencies[currencyKeys].name
  );
  const languages = Object.keys(data.languages).map(
    (languageKeys) => data.languages[languageKeys]
  );
  const borders = borderCountries.map((country) => country.name.common);

  return (
    <>
      <Button to="/countries">
        <CgArrowLeft fontSize="2rem" />
        Back
      </Button>
      {!data && <div>no data yet</div>}
      {data && (
        <MainContainer>
          <Flag src={flagSrc} alt="" />
          <DetailsContainer>
            <h2>{name}</h2>
            <NativeContainer>
              <p>
                <Label>Native Name: </Label>
                {nativeName}
              </p>
              <p>
                <Label>Population: </Label>
                {population}
              </p>
              <p>
                <Label>Region: </Label>
                {region}
              </p>
              <p>
                <Label>Sub Region: </Label>
                {subRegion}
              </p>
              <p>
                <Label>Capital: </Label>
                {capital}
              </p>
              <br />
            </NativeContainer>
            <TopLevelContainer>
              <p>
                <Label>Top Level Domain: </Label>
                {topLevelDomain}
              </p>
              <p>
                <Label>Currencies: </Label>
                {currencies.join(", ")}
              </p>
              <p>
                <Label>Languages: </Label>
                {languages.join(", ")}
              </p>
              <br />
            </TopLevelContainer>
            <BordersContainer>
              <p>
                <Label>Border Countries:</Label>
              </p>
              {borders.map((border, index) => (
                <Button key={index} to="/countries">
                  {border}
                </Button>
              ))}
            </BordersContainer>
          </DetailsContainer>
        </MainContainer>
      )}
    </>
  );
};

export default CountryDetails;
