import React from "react";
import { MainContainer, Input } from "./SearchBar.elements";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ query, onQueryChange, placeholder }) => {
  const inputHandler = (e) => {
    onQueryChange(e.target.value);
  };

  return (
    <MainContainer>
      <AiOutlineSearch fontSize="1.5rem" aria-hidden="true" />
      <Input value={query} onChange={inputHandler} placeholder={placeholder} />
    </MainContainer>
  );
};

export default SearchBar;
