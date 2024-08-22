

import React from 'react';
import './Modal.css'; // Import the CSS file for modal styling

const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        <p className="modal-text">{message}</p>
      </div>
    </div>
  );
};

export default Modal;

