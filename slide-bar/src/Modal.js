import React from "react";
import { FaTimes } from "react-icons/fa";
import { UserContext } from "./context";
import { useContext } from "react";

const Modal = () => {
  const { setModal } = useContext(UserContext);
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h3>modal content</h3>
        <button
          className="close-modal-btn"
          onClick={() => {
            setModal(false);
          }}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
