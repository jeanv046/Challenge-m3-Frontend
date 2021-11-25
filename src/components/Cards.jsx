import React from "react";
import Image from "../assets/img/img_2.png";

const Cards = (props) => {
    const host = process.env.REACT_APP_URL_HOST_IMAGE

    
  return (
    <div className="d-flex content-card">
      <div className="content-grid">
        {props.cards.map((element, index) => {
          return (
            <div className="card" key={index}>
              <div
                className="img-card"
                style={{ backgroundImage: "url(" + host + element.image + ")" }}
              ></div>
              <div className="card-body">
                <h5 className="card-title text-upper">{element.name}</h5>
                <p className="card-text">R$ {element.price}</p>
                <p className="card-text-down">até {element.parcelamento[0]}x de R${element.parcelamento[1]}</p>
                <button className="boton-card">COMPRAR</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
