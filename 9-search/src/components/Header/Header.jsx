import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Movies</h1>
      <nav className="header__nav">
        <ul className="header__nav-items">
          <li className="header__nav-item">
            <Link to="/" className="header__link">Home</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/search" className="header__link">Search</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
