import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { MainContainer } from "./Main.elements";
import CountriesPage from "../../pages/CountriesPage";
import CountryDetailsPage from "../../pages/CountryDetailsPage";
import { AnimatePresence } from "framer-motion";

const Main = () => {
  const location = useLocation();

  return (
    <MainContainer>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/countries" />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route
            path="/countries/:countryCode"
            element={<CountryDetailsPage />}
          />
        </Routes>
      </AnimatePresence>
    </MainContainer>
  );
};

export default Main;

// countries
// countries/::countryId
