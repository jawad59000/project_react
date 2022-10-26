import { createContext, useState } from "react";
import useFetch from "./useFetch";
const UserContext = createContext();

function AppProvider({ children }) {
  const [value, setValue] = useState("one piece");

  const { data } = useFetch(`s=${value}`);
  const myContext = {
    value,
    setValue,
    data,
  };

  return (
    <UserContext.Provider value={myContext}>{children}</UserContext.Provider>
  );
}

export { AppProvider, UserContext };
