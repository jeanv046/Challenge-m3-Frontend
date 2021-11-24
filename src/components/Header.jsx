import React from "react";
import logo from "../assets/img/logo-m3.png";
import carrito from "../assets/img/carrito.png";

const Header = () => {
  return (
    <>
      <header className="container">
        <div className="container-image">
          <div className="izq-logo">
            <img src={logo} width="100" alt="" />
          </div>
          <div className="der-carrito">
            <img src={carrito} alt="" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
