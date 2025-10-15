import { createContext, useContext } from "react";

// 1. Create and export the context object
export const AppContext = createContext(null);

// 2. Create and export the custom hook that uses the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};