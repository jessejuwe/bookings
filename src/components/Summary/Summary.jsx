import classes from './Summary.module.css';

const Summary = () => {
  return (
    <section className={classes.section}>
      <div className={classes.subtotal}>
        <h3>Subtotal</h3>
        <h3>₦2,497.00</h3>
      </div>

      <div className={classes.tax}>
        <h3>Estimated TAX</h3>
        <h3>₦119.64</h3>
      </div>

      <div className={classes.promocode}>
        <h3>
          Promotional Code: <span>Z4KXLM9A</span>
        </h3>
        <h3>₦-60.00</h3>
      </div>
    </section>
  );
};

export default Summary;
