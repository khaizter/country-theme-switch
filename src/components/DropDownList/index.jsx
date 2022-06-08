import { MainContainer, Toggle, List, Item } from "./DropDownList.elements";
import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const DropDownList = ({ selected, onSelectedChange, items, placeholder }) => {
  const [showList, setShowList] = useState(false);

  const toggleHandler = () => {
    if (!items) return;
    setShowList((prevState) => !prevState);
  };

  const selectHandler = (item) => {
    onSelectedChange(item);
    setShowList(false);
  };

  return (
    <MainContainer>
      <Toggle onClick={toggleHandler}>
        {selected ? selected : placeholder}
        <RiArrowDownSLine />
      </Toggle>
      {showList && (
        <List>
          {items?.map((item, index) => {
            return (
              <li key={index}>
                <Item onClick={selectHandler.bind(null, item)}>{item}</Item>
              </li>
            );
          })}
        </List>
      )}
    </MainContainer>
  );
};

export default DropDownList;
