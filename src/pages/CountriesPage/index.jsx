import React from "react";
import CountrySearch from "../../components/CountrySearch";
import CountryFilter from "../../components/CountryFilter";
import CountryList from "../../components/CountryList";

const CountriesPage = () => {
  return (
    <>
      <CountrySearch />
      <CountryFilter />
      <CountryList />
    </>
  );
};

export default CountriesPage;
