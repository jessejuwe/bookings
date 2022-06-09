import { useReducer } from 'react';

const initialInputState = { value: '', isTouched: false };

// A Reducer Function
const inputStateReducer = (prevState, action) => {
  // prettier-ignore
  if (action.type === 'CHANGE') return { value: action.value, isTouched: prevState.isTouched };

  // prettier-ignore
  if (action.type === 'BLUR') return { value: prevState.value, isTouched: true };

  if (action.type === 'RESET') return initialInputState;

  return initialInputState;
};

const useInput = validateValue => {
  // useReducer returns an array with two elements
  // prettier-ignore
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

  // Value Validity
  const valueIsValid = validateValue(inputState.value);

  const hasError = !valueIsValid && inputState.isTouched;

  // ******* ON CHANGE HANDLER **********

  const valueChangeHandler = event => {
    dispatch({ type: 'CHANGE', value: event.target.value });
    // setEnteredValue(event.target.value);
  };

  // ******* ON BLUR (LOST-FOCUS) HANDLER **********
  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => dispatch({ type: 'RESET' });

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
