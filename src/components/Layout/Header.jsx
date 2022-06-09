import classes from './Header.module.css';

const Header = props => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a href="/">TRIPS</a>
          </li>
          <li>
            <a href="/">RECENTLY VIEWED</a>
          </li>
          <li>
            <a href="/">BOOKINGS</a>
          </li>
          <li>
            <img
              src={require('../../assets/headshot.avif')}
              alt="Profile"
              onClick={props.onShowModal}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
