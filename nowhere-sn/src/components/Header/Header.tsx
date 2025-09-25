import React from "react";
import "./header.scss";
import Logo from "../../UI/Logo/Logo";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <NavLink to="/" className="header__logo-link">
          <Logo />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
