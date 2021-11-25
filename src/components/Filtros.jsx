import React from "react";

const Filtros = (props) => {
  const ranges = [
    { min: 0, max: 50 },
    { min: 51, max: 150 },
    { min: 151, max: 300 },
    { min: 301, max: 500 },
    { min: 500 },
  ];

  return (
    <>
      <div className="container-filtro d-none d-sm-block">
        <p className="text-filtro">Cores</p>
        <div className="margin-core">
          {props.colores.map((element, index) => {
            return (
              <label htmlFor={"cores-" + index}>
                <input
                  type="checkbox"
                  id={"cores-" + index}
                  className="input-core"
                />
                <div className="content-checks" key={index}>
                  <div className="checks">
                    <div className="icon-checks"></div>
                  </div>
                  <p className="text">{element}</p>
                </div>
              </label>
            );
          })}
        </div>

        <p className="text-filtro">Tamanhos</p>
        <div className="container-talla">
          {props.tamano.map((element, index) => {
            return (
              <label htmlFor={"tamanhos-" + index}>
                <input
                  type="checkbox"
                  id={"tamanhos-" + index}
                  className="input-tamanhos"
                />
                <div className="check-talla" key={index}>
                  <p className="text-talla">{element}</p>
                </div>
              </label>
            );
          })}
        </div>

        <p className="text-filtro">FAIXA DE PREçO</p>
        {ranges.map((range, index) => (
          <label htmlFor={"range-" + index}>
            <input
              type="checkbox"
              id={"range-" + index}
              className="input-core"
            />
            <div className="content-checks" key={index}>
              <div className="checks">
                <div className="icon-checks"></div>
              </div>
              <p className="text">
                  {!range?.max
                    ? `a partir de R$ ${range.min}`
                    : `de R$ ${range.min} até R$ ${range.max}`}
                </p>
            </div>
          </label>
        ))}
      </div>
    </>
  );
};

export default Filtros;
