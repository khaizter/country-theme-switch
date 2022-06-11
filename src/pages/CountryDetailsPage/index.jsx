import React from "react";
import CountryDetails from "../../components/CountryDetails";
import ButtonLink from "../../styled_globals/ButtonLink";
import { CgArrowLeft } from "react-icons/cg";
import styled from "styled-components";
import { Page } from "../CountriesPage/CountriesPage.elements";

const BackButton = styled(ButtonLink)`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const CountryDetailsPage = () => {
  return (
    <Page
      initial={{ opacity: 0, y: "20%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut" }}
    >
      <BackButton whileHover={{ x: "5px" }} to="/countries">
        <CgArrowLeft fontSize="2rem" />
        Back
      </BackButton>
      <CountryDetails />
    </Page>
  );
};

export default CountryDetailsPage;
