import React from "react";
import CountryList from "../../components/CountryList";
import { Page } from "./CountriesPage.elements";

const CountriesPage = () => {
  return (
    <Page
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ ease: "easeInOut" }}
    >
      <CountryList />
    </Page>
  );
};

export default CountriesPage;
