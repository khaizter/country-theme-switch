import React from "react";
import { StyledMain } from "./Main.styled";
import CountrySearch from "../CountrySearch";
import CountryFilter from "../CountryFilter";
import CountryList from "../CountryList";

const Main = () => {
  return (
    <StyledMain>
      <CountrySearch />
      <CountryFilter />
      <CountryList />
    </StyledMain>
  );
};

export default Main;
