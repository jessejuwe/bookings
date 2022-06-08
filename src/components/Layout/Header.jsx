import './Header.css';

const Header = () => {
  return (
    <nav className="nav">
      <div className="section-list">
        <ul className="list">
          <li>
            <a href="/">TRIPS</a>
          </li>
          <li>RECENTLY VIEWED</li>
          <li>BOOKINGS</li>
        </ul>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV0uFMU_Z_bvQqesaQQCo6mqB8-lehIGQeuQ&usqp=CAU"
          alt="Profile"
        />
      </div>
    </nav>
  );
};

export default Header;
