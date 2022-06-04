import React, { useState } from "react";
import {
  StyledCountrySearch,
  StyledCountrySearchInput,
} from "./CountrySearch.styled";
import { AiOutlineSearch } from "react-icons/ai";

const CountrySearch = () => {
  const [query, setQuery] = useState("");

  const searchInputHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <StyledCountrySearch>
      <AiOutlineSearch fontSize="1.25rem" color="hsl(0, 0%, 52%)" />
      <StyledCountrySearchInput
        value={query}
        onChange={searchInputHandler}
        placeholder="Search for a country..."
      />
    </StyledCountrySearch>
  );
};

export default CountrySearch;
