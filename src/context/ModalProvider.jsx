import React, { useReducer } from 'react';

import ModalContext from './modal-context';

// Default Modal State
const defaultModalState = { modalIsOpen: false };

// Modal Reducer function, logic for validation
const modalReducer = (state, action) => {
  if (action.type === 'OPEN_MODAL') return { modalIsOpen: true };

  if (action.type === 'CLOSE_MODAL') return { modalIsOpen: false };

  return defaultModalState;
};

const ModalProvider = props => {
  // prettier-ignore
  const [modalState, dispatch] = useReducer(modalReducer, defaultModalState);

  const openModal = () => dispatch({ type: 'OPEN_MODAL' });

  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' });

  // prettier-ignore
  const modalContext = { modalIsOpen: modalState.modalIsOpen, openModal, closeModal };

  return (
    <ModalContext.Provider value={modalContext}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
