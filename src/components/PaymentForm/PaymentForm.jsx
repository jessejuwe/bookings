import Card from '../UI/Card';
import classes from './PaymentForm.module.css';

const PaymentForm = () => {
  const submitHandler = event => {
    event.preventDefault();
  };

  return (
    <Card>
      <div className={classes.payments}>
        <img src={require('../../assets/visa.png')} alt="visa" />
        <img src={require('../../assets/mastercard.png')} alt="master-card" />
        <img src={require('../../assets/paypal.png')} alt="paypal" />
      </div>

      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.controls}>
          <div>
            <label htmlFor="ccn">Credit card number</label>
            <input
              id="ccn"
              type="text"
              inputmode="numeric"
              pattern="[0-9\s]{13,19}"
              autocomplete="cc-number"
              maxlength="19"
              placeholder="1234 5678 9012 3456"
              max="19"
            />
          </div>

          <div>
            <label htmlFor="expDate">Expiration date</label>
            <input id="expDate" type="text" placeholder="06/16" />
          </div>
        </div>

        <div className={classes.controls}>
          <div>
            <label htmlFor="secCode">Security code</label>
            <input id="secCode" type="number" placeholder="420" max="3" />
          </div>

          <div>
            <label htmlFor="postalcode">Postal code</label>
            <input id="postalcode" type="number" placeholder="10119" max="5" />
          </div>
        </div>

        <div className={classes.actions}>
          <input type="radio" value="Yes" />
          <label>Use this card for next time purchase</label>
        </div>

        <button>Add card</button>
      </form>
    </Card>
  );
};

export default PaymentForm;
