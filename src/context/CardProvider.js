import React, { useReducer } from 'react';

import ModalContext from './modal-context';

// Default Modal State
const defaultCardState = { ccn: '', expDate: '' };

const cardReducer = (state, action) => {
  if (action.type === 'SET_CCN')
    return { ccn: state.ccn, expDate: state.expDate };

  if (action.type === 'SET_EXP_DATE')
    return { ccn: state.ccn, expDate: state.expDate };

  return defaultCardState;
};

const CardProvider = props => {
  // prettier-ignore
  const [cardState, dispatch] = useReducer(cardReducer, defaultCardState);

  const setCCN = () => dispatch({ type: 'SET_CCN' });

  const setEXPDATE = () => dispatch({ type: 'SET_EXP_DATE' });

  const cardContext = {
    ccn: cardState.ccn,
    expDate: cardState.expDate,
    setCCN,
    setEXPDATE,
  };

  return (
    <ModalContext.Provider value={cardContext}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default CardProvider;
