import React from "react";
import Logo from "../../../../../assets/img/zenips-store-2.png";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div className="toolbar-logo">
      <Link to="/">
        <img src={Logo} className="toolbar-logo-img" alt="Logo" />
      </Link>
    </div>
  );
};

export default Brand;
