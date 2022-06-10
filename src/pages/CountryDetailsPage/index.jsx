import React from "react";
import CountryDetails from "../../components/CountryDetails";
import ButtonLink from "../../styled_globals/ButtonLink";
import { CgArrowLeft } from "react-icons/cg";
import styled from "styled-components";

const BackButton = styled(ButtonLink)`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const CountryDetailsPage = () => {
  return (
    <>
      <BackButton to="/countries">
        <CgArrowLeft fontSize="2rem" />
        Back
      </BackButton>
      <CountryDetails />
    </>
  );
};

export default CountryDetailsPage;
