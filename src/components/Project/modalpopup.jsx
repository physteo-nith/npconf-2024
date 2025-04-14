import React from 'react';
import './modalpopup.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='modal'>
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>Close</button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;