import { createContext, useEffect, useState } from "react";

import { getItemsCategoryByQuery, getScreensData } from "../firebase";

export const ScreensContext = createContext(null);

export const ScreensContextProvider = ({ children }) => {
  const [screens, setScreens] = useState(null);
  const [filterTerm, setFilterTerm] = useState("");

  const setFilterItem = (term) => {
    setFilterTerm(term);
  };
  useEffect(() => {
    const getScreens = async () => {
      let screens;
      if (!filterTerm) {
        screens = await getScreensData();
      } else {
        screens = await getItemsCategoryByQuery(filterTerm);
      }

      if (screens) {
        setScreens(screens);
      }
    };
    getScreens();
  }, [filterTerm]);

  return (
    <ScreensContext.Provider
      value={{
        screens,
        setFilterItem,
        filterTerm,
      }}
    >
      {children}
    </ScreensContext.Provider>
  );
};
