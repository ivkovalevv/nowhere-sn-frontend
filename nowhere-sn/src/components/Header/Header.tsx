import React from "react";
import "./header.scss";
import Logo from "../../UI/Logo/Logo";
import { NavLink } from "react-router-dom";

export type ThemeProps = {
  theme: boolean;
};

const Header = (props: ThemeProps) => {
  return (
    <header className="header">
      <div className="container">
        <NavLink to="/" className="header__logo-link">
          <Logo theme={props.theme} />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
