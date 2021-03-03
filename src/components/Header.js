import React from "react";
import "../styles/Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="headerText">
        <h1>Meblex</h1>
        <div className="titleUnderline"></div>
        <h2>Najnowsze trędy</h2>
        <h3>Najlepsza jakość</h3>
      </div>
      <i className="fas fa-bars menuIcon"></i>
      <nav className="headerNavigation">
        <ul>
          <li>
            <NavLink to="/home">START</NavLink>
          </li>
          <li>
            <NavLink to="/kitchen">KUCHNIA</NavLink>
          </li>
          <li>
            <NavLink to="/bathroom">ŁAZIENKA</NavLink>
          </li>
          <li>
            <NavLink to="/livingroom">SALON</NavLink>
          </li>
          <li>
            <NavLink to="/contact">KONTAKT</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
