import React, { ReactNode } from "react";
import "./Modal.css";

interface ModalProps {
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="modal-container">
      <div className="modal-body">{children}</div>
    </div>
  );
};

export default Modal;
