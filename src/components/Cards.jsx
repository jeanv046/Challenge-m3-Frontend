import React from "react";
import Image from "../assets/img/img_2.png";

const Cards = (props) => {
    const host = process.env.REACT_APP_URL_HOST_IMAGE

    
  return (
    <div className="d-flex content-card">
      <div className="content-grid">
        {props.cards.map((element, index) => {
          return (
            <div className="card">
              <div
                className="img-card"
                style={{ backgroundImage: "url(" + host + element.image + ")" }}
              ></div>
              <div className="card-body">
                <h5 className="card-title">{element.name}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
