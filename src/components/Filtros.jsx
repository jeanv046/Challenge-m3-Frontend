import React from "react";

const Filtros = (props) => {
  

  return (
    <>
      <div className="container-filtro d-none d-sm-block">
        <p className="text-filtro">Cores</p>
        <div className="margin-core">
          {props.colores.map((element, index) => {
            return (
              <label htmlFor={"cores-" + index} key={index}>
                <input
                  type="checkbox"
                  id={"cores-" + index}
                  className="input-core"
                  value={element}
                  onChange={(e) => {
                    props.onChangeFilterColor(e);
                  }}
                />
                <div className="content-checks">
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
              <label htmlFor={"tamanhos-" + index} key={index}>
                <input
                  type="checkbox"
                  id={"tamanhos-" + index}
                  className="input-tamanhos"
                  value={element}
                  onChange={(e) => {
                    props.onChangeFilterTalla(e);
                  }}
                />
                <div className="check-talla">
                  <p className="text-talla">{element}</p>
                </div>
              </label>
            );
          })}
        </div>

        <p className="text-filtro">FAIXA DE PREçO</p>
        {props.ranges.map((range, index) => (
          <label htmlFor={"range-" + index} key={index}>
            <input
              type="checkbox"
              id={"range-" + index}
              className="input-core"
              value={range.option}
              onChange={(e) => {
                props.onChangeFilterRangePrice(e);
              }}
            />
            <div className="content-checks">
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
