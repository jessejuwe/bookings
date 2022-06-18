import { useContext } from 'react';

import CardContext from '../../context/card-context';

import Card from '../UI/Card';

import classes from './Information.module.css';

const Information = () => {
  const ctx = useContext(CardContext);

  return (
    <Card>
      <div className={classes.section}>
        <h1>Payment Information</h1>
        <p>Choose your method of payment.</p>

        <div className={classes.card}>
          <p>CARDS NUMBER</p>
          <p>{ctx.ccn !== '' ? ctx.ccn : '4324 5433 9382 1030'}</p>
          <img src={require('../../assets/microchip.png')} alt="micro-chip" />
          <p>EXPIRATION DATE</p>
          <p>{ctx.expDate !== '' ? ctx.expDate : '03/24'}</p>

          <div className={classes.logo}>
            <p>John Doe</p>
            <img
              src={require('../../assets/master-card.png')}
              alt="mastercard"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Information;
