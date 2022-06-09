import Card from '../UI/Card';

import classes from './Information.module.css';

const Information = () => {
  return (
    <Card>
      <div className={classes.section}>
        <h1>Payment Information</h1>
        <p>Choose your method of payment.</p>
        <img
          src="https://i.pinimg.com/736x/42/b9/d8/42b9d8448d7e55376e273fb874eea753--black-card-credit-cards.jpg"
          alt="credit-card"
        />
      </div>
    </Card>
  );
};

export default Information;
