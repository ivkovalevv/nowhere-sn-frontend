import React from "react";
import "./logo.scss";
import EnsoSVG from "../svg/EnsoSVG";

const Logo = () => {
  return (
    <div className="logo">
      <EnsoSVG />
      <div className="logo__wrapper">
        <h3 className="logo__title">Nowhere</h3>
        <h3 className="logo__description">social network for being here now</h3>
      </div>
    </div>
  );
};

export default Logo;
