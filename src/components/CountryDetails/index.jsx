import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  MainContainer,
  Flag,
  Label,
  DetailsSection,
  CountryHeading,
  NativeContainer,
  TopLevelContainer,
  BordersContainer,
  BordersButtons,
  BorderButton,
} from "./CountryDetails.elements";
import LoaderIcon from "../../icons/LoaderIcon";
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

  let errorBorderCountries = isErrorBorderCountries;

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
  }, [countryCode, setRequestCountries]);

  // Get border countries name
  useEffect(() => {
    if (!country) {
      return;
    }
    if (!country?.borders.length) {
      errorBorderCountries = false;
      return;
    }
    setRequestBorderCountries({
      url: "https://restcountries.com/v3.1/alpha/",
      params: {
        codes: country?.borders.join(","),
      },
    });
  }, [country, setRequestBorderCountries]);

  return (
    <>
      {isLoadingCountries && <LoaderIcon style={{ alignSelf: "center" }} />}
      {!isLoadingCountries && (
        <>
          {isErrorCountries ? (
            <div>Fetching details failed!</div>
          ) : (
            <MainContainer>
              <Flag src={flagSrc} alt={`${name} flag`} />
              <DetailsSection>
                <CountryHeading>{name}</CountryHeading>
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
                    {currencies?.join(", ")}
                  </p>
                  <p>
                    <Label>Languages: </Label>
                    {languages?.join(", ")}
                  </p>
                  <br />
                </TopLevelContainer>
                <BordersContainer>
                  <Label>Border Countries:</Label>
                  <BordersButtons>
                    {isLoadingBorderCountries && (
                      <div>Loading border countries...</div>
                    )}
                    {!isLoadingBorderCountries &&
                      borders?.map((border, index) => (
                        <BorderButton
                          whileHover={{ y: "-3px" }}
                          key={index}
                          to={`/countries/${border.code}`}
                        >
                          {border.name}
                        </BorderButton>
                      ))}
                    {errorBorderCountries && !!country?.borders.length && (
                      <div>Fetching border countries failed!</div>
                    )}
                    {!country?.borders.length && (
                      <div>No border countries.</div>
                    )}
                  </BordersButtons>
                </BordersContainer>
              </DetailsSection>
            </MainContainer>
          )}
        </>
      )}
    </>
  );
};

export default CountryDetails;
