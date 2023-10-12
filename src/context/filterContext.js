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
  const [filtered_State, dispatch] = useReducer(reducer, defaultState);
  const { videos } = useVideoContext();
  //
  useEffect(() => {
    dispatch({ type: "LOADING_VIDEOS", payload: videos });
  }, [videos]);

  //   useEffect(() => {
  //     dispatch({ type: "FILTER_PRODUCTS" });
  //   }, [filtered_State.filters]);

  // const updateFilters = (e) => {
  //   const { name, value } = e.target;
  //   dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
  // };
  return (
    <div>
      <FilterContext.Provider value={{ ...filtered_State }}>
        {children}
      </FilterContext.Provider>
    </div>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
