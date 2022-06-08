import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CgArrowLeft } from "react-icons/cg";
import {
  MainContainer,
  Button,
  Flag,
  Label,
  DetailsContainer,
  NativeSection,
  TopLevelSection,
  BordersSection,
  BordersButtons,
} from "./CountryDetails.elements";
import useHttp from "../../hooks/useHttp";

const CountryDetails = () => {
  const { countryCode } = useParams();
  const [countries, isLoadingCountries, isErrorCountries, setRequestCountries] =
    useHttp(null, false);

  const [
    borderCountries,
    isLoadingBorderCountries,
    isErrorBorderCountries,
    setRequestBorderCountries,
  ] = useHttp(null, false);

  const country = countries && countries[0];
  const flagSrc = country?.flags.png;
  const name = country?.name.common;
  const nativeName =
    country &&
    Object.keys(country.name.nativeName).map(
      (lang) => country.name.nativeName[lang].common
    )[0];
  const population = country?.population;
  const region = country?.region;
  const subRegion = country?.subregion;
  const capital = country?.capital;
  const topLevelDomain = country?.tld[0];
  const currencies =
    country &&
    Object.keys(country.currencies).map(
      (currencyKeys) => country.currencies[currencyKeys].name
    );
  const languages =
    country &&
    Object.keys(country.languages).map(
      (languageKeys) => country.languages[languageKeys]
    );
  const borders = borderCountries?.map((country) => {
    return {
      name: country.name.common,
      code: country.cca2,
    };
  });

  // Get Details of passed country code
  useEffect(() => {
    setRequestCountries({
      url: "https://restcountries.com/v3.1/alpha/",
      params: {
        codes: countryCode,
        fields: [
          "flags",
          "name",
          "population",
          "region",
          "subregion",
          "capital",
          "tld",
          "currencies",
          "languages",
          "borders",
        ].join(","),
      },
    });
  }, [countryCode]);

  // Get border countries name
  useEffect(() => {
    if (!country) {
      return;
    }
    setRequestBorderCountries({
      url: "https://restcountries.com/v3.1/alpha/",
      params: {
        codes: country?.borders.join(","),
      },
    });
  }, [country]);

  return (
    <>
      <Button to="/countries">
        <CgArrowLeft fontSize="2rem" />
        Back
      </Button>
      {isLoadingCountries && <div>Loading details...</div>}
      {!isLoadingCountries && (
        <MainContainer>
          <Flag src={flagSrc} alt="" />
          <DetailsContainer>
            <h2>{name}</h2>
            <NativeSection>
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
            </NativeSection>
            <TopLevelSection>
              <p>
                <Label>Top Level Domain: </Label>
                {topLevelDomain}
              </p>
              <p>
                <Label>Currencies: </Label>
                {currencies?.join(", ")}
              </p>
              <p>
                <Label>Languages: </Label>
                {languages?.join(", ")}
              </p>
              <br />
            </TopLevelSection>
            <BordersSection>
              <p>
                <Label>Border Countries:</Label>
              </p>
              <BordersButtons>
                {isLoadingBorderCountries && (
                  <div>Loading border countries...</div>
                )}
                {!isLoadingBorderCountries &&
                  borders?.map((border, index) => (
                    <Button
                      key={index}
                      to={`/countries/${border.code}`}
                      lower="true"
                    >
                      {border.name}
                    </Button>
                  ))}
                {isErrorBorderCountries && (
                  <div>Fetching border countries failed!</div>
                )}
              </BordersButtons>
            </BordersSection>
          </DetailsContainer>
        </MainContainer>
      )}
      {isErrorCountries && <div>Fetching details failed!</div>}
    </>
  );
};

export default CountryDetails;
