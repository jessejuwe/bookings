import React from 'react';

const ModalContext = React.createContext({
  modalIsOpen: false,
  ccn: '',
  expDate: '',
  openModal: () => {},
  closeModal: () => {},
});

export default ModalContext;
