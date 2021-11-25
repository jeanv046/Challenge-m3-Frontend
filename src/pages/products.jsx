import React, { useState, useEffect } from "react";
import axios from "axios";
import Filtros from "../components/Filtros";
import Cards from "../components/Cards";
import Order from "../components/Order";

const Products = () => {
  const [colores] = useState([]);
  const [tamano] = useState([]);
  const [cards, setCartas] = useState([]);
  const [page, setPages] = useState(1);
  const [visible, setVisible] = useState(true);
  const optionOrdering = [
    "_sort=date&_order=desc",
    "_sort=price&_order=asc",
    "_sort=price&_order=desc",
  ];
  const host = process.env.REACT_APP_URL_HOST;

  let url = host + `/products?_page=${page}&_limit=9`;
  /* const [precio] = useState([]); */

  async function consumir_api(url, update = true) {
    await axios
      .get(url)
      .then((respuesta) => {
        if (respuesta.data.length > 0) {
          respuesta.data.forEach((element) => {
            colores.indexOf(element.color) === -1 &&
              colores.push(element.color);
            element.size.forEach((element) => {
              tamano.indexOf(element) === -1 && tamano.push(element);
            });
            tamano.sort((a, b) => a - b);
            /* precio.indexOf(element.price) === -1 && precio.push(element.price); */
          });
          (update && setCartas(cards.concat(respuesta.data))) ||
            setCartas(respuesta.data);

          console.log(cards);
        } else {
          setVisible(false);
          setPages(page);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleOrdering(event) {
    let position = event.target.value;
    /* url += '&' + optionOrdering[position]
    set */
    let url = host + "/products?" + optionOrdering[position];
    consumir_api(url, false);
    console.log(event.target.value);
  }

  useEffect(() => {
    setPages(page);
    console.log("Entro");
    consumir_api(url);
  }, [url]);

  return (
    <>
      <div className="container">
        <div className="d-flex w-full j-between a-center">
          <p className="text-title w-full">Blusas</p>
          <div className="d-none d-sm-block">
            <Order handle={handleOrdering} />
          </div>
        </div>
        
          <div className="d-flex d-sm-none j-center">
              <button className="btn-responsive left">Filtrar</button>
              <button className="btn-responsive rigth">Ordenar</button>
          </div>

        <div className="contend-tween">
          <div className="d-flex contend-duo">
            <Filtros colores={colores} tamano={tamano} />
            <Cards cards={cards} />
          </div>
          <div className="d-flex j-center contend-tween">
            {visible && (
              <button className="btn-mas" onClick={() => setPages(page + 1)}>
                CARREGAR MAIS
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
