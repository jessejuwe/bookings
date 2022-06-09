import classes from './Payment.module.css';

const Payment = () => {
  return (
    <form className={classes.form}>
      <div className={classes.actions}>
        <button>Complete payment</button>
        <label>TOTAL:₦2556.64</label>
      </div>
    </form>
  );
};

export default Payment;
