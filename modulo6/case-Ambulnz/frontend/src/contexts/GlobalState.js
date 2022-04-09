import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [itemsSelected, setItemsSelected] = useState([]);

  const states = { itemsSelected, isLoading };
  const setters = { setIsLoading, setItemsSelected };

  return (
    <GlobalContext.Provider value={{ states, setters }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
