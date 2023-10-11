import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/filterReducer";
import { useVideoContext } from "./videoContext";

export const FilterContext = createContext();

//
const defaultState = {
  filtered_Videos: [],
  all_Videos: [],
  filters: {
    text: "",
    category: "all",
  },
};
export const FilterProvider = ({ children }) => {
  const [filtered_State, dispath] = useReducer(defaultState);
  const { videos } = useVideoContext;
  return (
    <div>
      <FilterContext.Provider value={{}}>{children}</FilterContext.Provider>
    </div>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
