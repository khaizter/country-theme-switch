import React, { useState, useEffect } from "react";
import { ListContainer } from "./CountryList.elements";
import SearchBar from "../SearchBar";
import DropDownList from "../DropDownList";
import CountryCard from "../CountryCard";
import useHttp from "../../hooks/useHttp";

const CountryList = () => {
  const [countries, isLoading, isError] = useHttp({
    url: "https://restcountries.com/v3.1/all",
    params: {
      fields: ["cca2", "flags", "name", "population", "region", "capital"].join(
        ","
      ),
    },
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRegion, setFilterRegion] = useState(null);
  const [regions, setRegions] = useState(null);

  let filteredCountries = countries?.filter((country) =>
    filterRegion ? country.region === filterRegion : true
  );

  filteredCountries = filteredCountries?.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filterRegionHandler = (region) => {
    if (region === "All" ? setFilterRegion(null) : setFilterRegion(region));
  };

  useEffect(() => {
    if (!countries) return;
    setRegions(["All", ...new Set(countries.map((country) => country.region))]);
  }, [countries]);

  return (
    <>
      <SearchBar
        query={searchQuery}
        onQueryChange={setSearchQuery}
        placeholder="Search for a country..."
      />
      <DropDownList
        selected={filterRegion}
        onSelectedChange={filterRegionHandler}
        items={regions}
        placeholder="Filter by Region"
      />
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <ListContainer>
          {filteredCountries?.map((country, index) => {
            return (
              <li key={index}>
                <CountryCard data={country} />
              </li>
            );
          })}
        </ListContainer>
      )}
      {isError && <div>Failed!</div>}
    </>
  );
};

export default CountryList;
