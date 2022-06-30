import React, { useState } from 'react';

export const CardContext = React.createContext({
  ccn: '',
  expDate: '',
  setCCN: value => {},
  setEXPDATE: value => {},
});

const CardContextProvider = props => {
  const [ccnValue, setCCNValue] = useState('');
  const [expDateValue, setExpDateValue] = useState('');

  const setCCN = value => setCCNValue(value);

  // prettier-ignore
  const setEXPDATE = value => setExpDateValue(value);

  // prettier-ignore
  const contextValue = {ccn: ccnValue, expDate: expDateValue, setCCN, setEXPDATE};

  return (
    <CardContext.Provider value={contextValue}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
