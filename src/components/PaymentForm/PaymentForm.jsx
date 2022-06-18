import { useContext } from 'react';

import Card from '../UI/Card';

import useInput from '../../hooks/use-input';
import CardContext from '../../context/card-context';

import classes from './PaymentForm.module.css';

const PaymentForm = () => {
  const ctx = useContext(CardContext);

  // prettier-ignore
  const ccnValidate = value => value.trim() !== '' && value.trim().length === 16;

  // prettier-ignore
  const expDateValidate = value => value.trim() !== '' && value.includes('/');

  // prettier-ignore
  const secCodeValidate = value => value.trim() !== '' && value.trim().length === 3;

  // prettier-ignore
  const postalCodeValidate = value => value.trim() !== '' && value.trim().length === 5;

  const {
    value: ccnValue,
    isValid: ccnIsValid,
    hasError: ccnHasError,
    valueChangeHandler: ccnInputChangeHandler,
    inputBlurHandler: ccnInputBlurHandler,
    reset: resetCCN,
  } = useInput(ccnValidate);

  const {
    value: expDateValue,
    isValid: expDateIsValid,
    hasError: expDateHasError,
    valueChangeHandler: expDateInputChangeHandler,
    inputBlurHandler: expDateInputBlurHandler,
    reset: resetexpDate,
  } = useInput(expDateValidate);

  const {
    value: secCodeValue,
    isValid: secCodeIsValid,
    hasError: secCodeHasError,
    valueChangeHandler: secCodeInputChangeHandler,
    inputBlurHandler: secCodeInputBlurHandler,
    reset: resetsecCode,
  } = useInput(secCodeValidate);

  const {
    value: postalCodeValue,
    isValid: postalCodeIsValid,
    hasError: postalCodeHasError,
    valueChangeHandler: postalCodeInputChangeHandler,
    inputBlurHandler: postalCodeInputBlurHandler,
    reset: resetpostalCode,
  } = useInput(postalCodeValidate);

  let formIsValid = false;

  // prettier-ignore
  if (ccnIsValid && expDateIsValid && secCodeIsValid && postalCodeIsValid) formIsValid = true;

  const submitHandler = event => {
    event.preventDefault();

    // Guard Clause
    if (!formIsValid) return;

    // update state context
    ctx.ccn = ccnValue;
    ctx.expDate = expDateValue;

    console.log(ctx);

    // TODO: Show modal success message

    // Reset state (clear input field)
    resetCCN();
    resetexpDate();
    resetsecCode();
    resetpostalCode();
  };

  const ccnInputClasses = ccnHasError ? classes.invalid : classes.valid;

  const expDateInputClasses = expDateHasError ? classes.invalid : classes.valid;

  const secCodeInputClasses = secCodeHasError ? classes.invalid : classes.valid;

  // prettier-ignore
  const postalCodeInputClasses = postalCodeHasError ? classes.invalid : classes.valid;

  return (
    <Card>
      <div className={classes.section}>
        <div className={classes.payments}>
          <img src={require('../../assets/visa.png')} alt="visa" />
          <img src={require('../../assets/mastercard.png')} alt="master-card" />
          <img src={require('../../assets/paypal.png')} alt="paypal" />
        </div>

        <form onSubmit={submitHandler} className={classes.form}>
          <div className={classes.controls}>
            <div className={ccnInputClasses}>
              <label htmlFor="ccn">Credit card number</label>
              <input
                id="ccn"
                type="text"
                inputMode="numeric"
                autoComplete="cc-number"
                maxLength="19"
                placeholder="4324 5433 9382 1030"
                onChange={ccnInputChangeHandler}
                onBlur={ccnInputBlurHandler}
                value={ccnValue}
              />
              {ccnHasError && (
                <p className={classes['error-text']}>
                  Enter the right card number
                </p>
              )}
            </div>

            <div className={expDateInputClasses}>
              <label htmlFor="expDate">Expiration date</label>
              <input
                id="expDate"
                type="text"
                placeholder="03/24"
                onChange={expDateInputChangeHandler}
                onBlur={expDateInputBlurHandler}
                value={expDateValue}
              />
              {expDateHasError && (
                <p className={classes['error-text']}>
                  Enter the right expiry date
                </p>
              )}
            </div>
          </div>

          <div className={classes.controls}>
            <div className={secCodeInputClasses}>
              <label htmlFor="secCode">Security code</label>
              <input
                id="secCode"
                type="text"
                placeholder="420"
                maxLength="3"
                onChange={secCodeInputChangeHandler}
                onBlur={secCodeInputBlurHandler}
                value={secCodeValue}
              />
              {secCodeHasError && (
                <p className={classes['error-text']}>
                  Enter the right security code
                </p>
              )}
            </div>

            <div className={postalCodeInputClasses}>
              <label htmlFor="postalCode">Postal code</label>
              <input
                id="postalCode"
                type="text"
                placeholder="10119"
                maxLength="5"
                onChange={postalCodeInputChangeHandler}
                onBlur={postalCodeInputBlurHandler}
                value={postalCodeValue}
              />
              {postalCodeHasError && (
                <p className={classes['error-text']}>
                  Enter the right postal code
                </p>
              )}
            </div>
          </div>

          <div className={classes.actions}>
            <input type="radio" value="Yes" />
            <label>Use this card for next time purchase</label>
          </div>

          <button>Add card</button>
        </form>
      </div>
    </Card>
  );
};

export default PaymentForm;
