import React from "react";

const Filtros = (props) => {
  return (
    <>
      <div>
        <div>
          <p className="text-title">Blusas</p>
        </div>
        <div className="container-filtro">
          <p className="text-filtro">Cores</p>
          {props.colores.map((element, index) => {
            return (
              <div className="checks" key={index}>
                <div className="rectangule1">
                  <div className="rectangule2"></div>
                </div>
                <label className="text" htmlFor="">
                  {element}
                </label>
              </div>
            );
          })}

          <p className="text-filtro">Tamanhos</p>
          <div className="container-talla">
            {props.tamano.map((element, index) => {
              return (
                <div className="checks" key={index}>
                  <div className="check-talla">
                    <p className="text-talla">{element}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-filtro">FAIXA DE PREçO</p>
          <div className="checks">
            <div className="rectangule1"></div>
            <label className="text" htmlFor="">
              de R$0 até R$50
            </label>
          </div>
          <div className="checks">
            <div className="rectangule1"></div>
            <label className="text" htmlFor="">
              de R$51 até R$150
            </label>
          </div>
          <div className="checks">
            <div className="rectangule1"></div>
            <label className="text" htmlFor="">
              de R$151 até R$300
            </label>
          </div>
          <div className="checks">
            <div className="rectangule1"></div>
            <label className="text" htmlFor="">
              de R$301 até R$500
            </label>
          </div>
          <div className="checks">
            <div className="rectangule1"></div>
            <label className="text" htmlFor="">
              a partir de R$ 500
            </label>
          </div>
          {/* <input className="input-check" type="checkbox" name="my-checkbox" id="opt-in" />
                    <label for="opt-in">Check me!</label> */}
        </div>
      </div>
    </>
  );
};

export default Filtros;
