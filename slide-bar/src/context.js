import React, { createContext, useState } from "react";
import { useRef } from "react";
const UserContext = createContext();

function AppProvider({ children }) {
  const [modal, setModal] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const modalElem = useRef(null);
  const sideBarElem = useRef(null);
  const myContext = {
    modal,
    setModal,
    sidebar,
    setSidebar,
    sideBarElem,
    modalElem,
  };

  return (
    <UserContext.Provider value={myContext}>{children}</UserContext.Provider>
  );
}

export { AppProvider, UserContext };
