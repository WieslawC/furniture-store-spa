import React from "react";
import "../styles/Header.scss";

const Header = () => {
  return (
    <header>
      <div className="headerText">
        <h1>Meblex</h1>
        <p>Najnowsze trędy, najlepsza jakość</p>
      </div>
      <i className="fas fa-bars menuIcon"></i>
    </header>
  );
};

export default Header;
