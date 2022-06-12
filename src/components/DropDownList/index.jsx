import {
  MainContainer,
  Toggle,
  List,
  ListItem,
  ItemButton,
} from "./DropDownList.elements";
import React, { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { AnimatePresence } from "framer-motion";

const ListVariants = {
  visible: {
    height: "max-content",
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
  hidden: { height: 0, transition: { duration: 0.4, ease: "easeIn" } },
};

const ItemButtonVariants = {
  visible: {
    opacity: 1,
  },
  hidden: { opacity: 0 },
};

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
      <Toggle whileHover={{ scale: 1.02 }} onClick={toggleHandler}>
        {selected ? selected : placeholder}
        {showList ? (
          <RiArrowUpSLine aria-hidden="true" />
        ) : (
          <RiArrowDownSLine aria-hidden="true" />
        )}
      </Toggle>
      <AnimatePresence>
        {showList && (
          <List
            variants={ListVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {items?.map((item, index) => {
              return (
                <ListItem key={index}>
                  <ItemButton
                    whileHover={{ x: 3, transition: { ease: "linear" } }}
                    variants={ItemButtonVariants}
                    onClick={selectHandler.bind(null, item)}
                  >
                    {item}
                  </ItemButton>
                </ListItem>
              );
            })}
          </List>
        )}
      </AnimatePresence>
    </MainContainer>
  );
};

export default DropDownList;
