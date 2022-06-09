import React from 'react';

const ModalContext = React.createContext({
  modalIsOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export default ModalContext;
