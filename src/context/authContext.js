import React from "react";
import { useState, createContext, useContext } from "react";
const AuthContext = createContext();
//
export const AuthProvider = ({ children }) => {
  const [authPage, setAuthPage] = useState(false);
  const slideOpen = () => {
    setAuthPage(true);
  };
  const slideClose = () => {
    setAuthPage(false);
  };
  //
  return (
    <div>
      <AuthContext.Provider value={{ authPage, slideOpen, slideClose }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
