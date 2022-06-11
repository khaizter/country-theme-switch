import React, { useState, useEffect } from "react";
import { ListContainer, FilterSection } from "./CountryList.elements";
import SearchBar from "../SearchBar";
import DropDownList from "../DropDownList";
import CountryCard from "../CountryCard";
import useHttp from "../../hooks/useHttp";
import { AnimatePresence } from "framer-motion";
import LoaderIcon from "../../icons/LoaderIcon";

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
      <FilterSection>
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
      </FilterSection>

      {isLoading && <LoaderIcon style={{ alignSelf: "center" }} />}
      {!isLoading && (
        <ListContainer>
          <AnimatePresence>
            {filteredCountries?.map((country) => {
              return <CountryCard data={country} key={country.cca2} />;
            })}
          </AnimatePresence>
        </ListContainer>
      )}
      {isError && <div>Failed!</div>}
    </>
  );
};

export default CountryList;
