import { Link, NavLink } from "react-router-dom";
import Icono from "../../assets/icono.ico";
import "./navbar.css";
import Button from "../../components/button/Button";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container custom-navbar">
          <Link to="/">
            <img
              src={Icono}
              alt="Logo del restaurante"
              className="iconoHome"
            ></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCodeBar"
            aria-controls="navbarCodeBar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCodeBar">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={`nav-link nav-text ${({ isActive }) =>
                    isActive ? "active" : ""}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link nav-text ${({ isActive }) =>
                    isActive ? "active" : ""}`} to="/cart">
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link nav-text ${({ isActive }) =>
                    isActive ? "active" : ""}`} to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link nav-text ${({ isActive }) =>
                    isActive ? "active" : ""}`} to="/about">
                  About
                </NavLink>
              </li>
            </ul>
            <Link to="/login">
              <Button title={"Sign In"}></Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
