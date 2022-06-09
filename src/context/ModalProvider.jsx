import React, { useReducer } from 'react';

import ModalContext from './modal-context';

// Default Modal State
const defaultModalState = { modalIsOpen: false, ccn: '', expDate: '' };

// Modal Reducer function, logic for validation
const modalReducer = (state, action) => {
  if (action.type === 'OPEN_MODAL')
    return { modalIsOpen: true, ccn: state.ccn, expDate: state.expDate };

  if (action.type === 'CLOSE_MODAL')
    return { modalIsOpen: false, ccn: state.ccn, expDate: state.expDate };

  return defaultModalState;
};

const ModalProvider = props => {
  // prettier-ignore
  const [modalState, dispatchModalAction] = useReducer(modalReducer, defaultModalState);

  const openModal = () => dispatchModalAction({ type: 'OPEN_MODAL' });

  const closeModal = () => dispatchModalAction({ type: 'CLOSE_MODAL' });

  const modalContext = {
    modalIsOpen: modalState.modalIsOpen,
    ccn: modalState.ccn,
    expDate: modalState.expDate,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={modalContext}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
