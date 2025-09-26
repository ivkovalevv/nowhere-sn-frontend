import React from "react";
import "./logo.scss";
import EnsoDarkSVG from "../svg/EnsoDarkSVG";
import EnsoLightSVG from "../svg/EnsoLightSVG";
import { ThemeProps } from "../../components/Header/Header";

const Logo = (props: ThemeProps) => {
  return (
    <div className="logo">
      {props.theme ? <EnsoDarkSVG /> : <EnsoLightSVG />}
      <div className="logo__wrapper">
        <h3 className="logo__title">Nowhere</h3>
      </div>
    </div>
  );
};

export default Logo;
