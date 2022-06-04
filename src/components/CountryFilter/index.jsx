import React, { useState } from "react";
import {
  StyledCountryFilter,
  ToggleButton,
  List,
  ListItem,
} from "./CountryFilter.styled";
import { RiArrowDownSLine } from "react-icons/ri";

const regions = ["All", "Oceania", "Asia"];

const CountryFilter = () => {
  const [selected, setSelected] = useState(null);
  const [showList, setShowList] = useState(false);

  const toggleHandler = () => {
    setShowList((prevState) => !prevState);
  };

  const selectHandler = (item) => {
    if (item === "All" ? setSelected(null) : setSelected(item));
    setShowList(false);
  };

  return (
    <StyledCountryFilter>
      <ToggleButton onClick={toggleHandler}>
        {selected ? selected : "Filter by Region"}
        <RiArrowDownSLine />
      </ToggleButton>
      {showList && (
        <List>
          {regions.map((region, index) => {
            return (
              <li key={index}>
                <ListItem onClick={selectHandler.bind(null, region)}>
                  {region}
                </ListItem>
              </li>
            );
          })}
        </List>
      )}
    </StyledCountryFilter>
  );
};

export default CountryFilter;
