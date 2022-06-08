import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainContainer } from "./Main.elements";
import CountriesPage from "../../pages/CountriesPage";
import CountryDetailsPage from "../../pages/CountryDetailsPage";

const Main = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Navigate to="/countries" />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route
          path="/countries/:countryCode"
          element={<CountryDetailsPage />}
        />
      </Routes>
    </MainContainer>
  );
};

export default Main;

// countries
// countries/::countryId
