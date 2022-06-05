import React, { useState, useEffect } from "react";
import { StyledCountryList } from "./CountryList.styled";
import axios from "axios";
import CountryCard from "../CountryCard";

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data));
  }, []);

  return (
    <StyledCountryList>
      {countries.length !== 0 &&
        countries.map((country, index) => {
          return (
            <li key={index}>
              <CountryCard data={country} />
            </li>
          );
        })}
    </StyledCountryList>
  );
};

export default CountryList;
