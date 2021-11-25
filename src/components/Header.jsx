import React from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/img/logo-m3.png";
import carrito from "../assets/img/carrito.png";

const Header = () => {
  function refresh() {
    window.location.reload(false);
  }
  return (
    <>
      <header>
          <div className="nav">

            <div className="container content-icons">

                <div className="izq-logo">
                    <img className="img-refresh" onClick={refresh} src={logo} width="100" alt="" />
                </div>
                <div className="der-carrito">
                    <img src={carrito} alt="" />
                </div>

            </div>

          </div>
      </header>
    </>
  );
};

export default Header;
