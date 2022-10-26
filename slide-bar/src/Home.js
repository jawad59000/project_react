import React, { useRef, useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { UserContext } from "./context";
import Modal from "./Modal";
const Home = () => {
  const { modal, setModal, sidebar, setSidebar, sideBarElem, modalElem } =
    useContext(UserContext);

  useEffect(() => {
    console.log(sideBarElem.current);
    console.log(modalElem.current);
  }, []);
  return (
    <main>
      <div>
        <Sidebar />
      </div>
      <button
        className="sidebar-toggle"
        onClick={() => {
          setSidebar(true);
        }}
      >
        <FaBars />
      </button>
      <button
        className="btn"
        onClick={() => {
          setModal(true);
        }}
      >
        show modal
      </button>

      {modal ? (
        <div ref={modalElem}>
          <Modal />
        </div>
      ) : (
        ""
      )}
    </main>
  );
};

export default Home;
