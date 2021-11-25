import React from "react";

const Cards = (props) => {
  const host = process.env.REACT_APP_URL_HOST_IMAGE;

  return (
    <div className="d-flex content-card">
      <div className="content-grid">
        {props.cards.map((element, index) => {
          /* console.log(props.filterRangePrice); */
          if (
            props.filterColor.length > 0 ||
            props.filterTalla.length > 0 ||
            props.filterRangePrice.length > 0
          ) {
            if (
              props.filterColor.includes(element.color) ||
              element.size.some((el) => props.filterTalla.includes(el))||
              props.filterRangePrice.some((rangePrice) => {
                /* console.log(rangePrice) */
                if (element.price <= rangePrice.max && element.price >= rangePrice.min) return true;
              })
              
            ) {
              return (
                <div className="card" key={index}>
                  <div
                    className="img-card"
                    style={{
                      backgroundImage: "url(" + host + element.image + ")",
                    }}
                  ></div>
                  <div className="card-body">
                    <h5 className="card-title text-upper">{element.name}</h5>
                    <p className="card-text">R$ {element.price}</p>
                    <p className="card-text-down">
                      até {element.parcelamento[0]}x de R$
                      {element.parcelamento[1]}
                    </p>
                    <button className="boton-card">COMPRAR</button>
                  </div>
                </div>
              );
            }
          } else {
            return (
              <div className="card" key={index}>
                <div
                  className="img-card"
                  style={{
                    backgroundImage: "url(" + host + element.image + ")",
                  }}
                ></div>
                <div className="card-body">
                  <h5 className="card-title text-upper">{element.name}</h5>
                  <p className="card-text">R$ {element.price}</p>
                  <p className="card-text-down">
                    até {element.parcelamento[0]}x de R$
                    {element.parcelamento[1]}
                  </p>
                  <button className="boton-card">COMPRAR</button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cards;
