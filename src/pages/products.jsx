import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Filtros from "../components/Filtros";
import Cards from "../components/Cards";
import Order from "../components/Order";

const Products = () => {
  const [resultado, setResultado] = useState({});
  const [colores] = useState([]);
  const [tamano] = useState([]);
  const [cards, setCartas] = useState([]);
  const host = process.env.REACT_APP_URL_HOST
  /* const [precio] = useState([]); */

  useEffect(() => {
    const consultarApi = async () => {
      const url = host + "/products";
      await axios
        .get(url)
        .then((respuesta) => {
          respuesta.data.forEach((element) => {
            colores.indexOf(element.color) === -1 &&
              colores.push(element.color);
            element.size.forEach((element) => {
              tamano.indexOf(element) === -1 && tamano.push(element);
            });
            tamano.sort((a, b) => a - b);
            
            /* precio.indexOf(element.price) === -1 && precio.push(element.price); */
          });
          setResultado(respuesta.data);
          setCartas(respuesta.data)
          console.log(resultado)
          console.log(cards)
          
        })
        .catch((err) => {
          console.log(err);
        });
    };
    consultarApi();
  }, [colores, tamano]);

  return (
    <>
      <div className="container">
        <div className="d-flex w-full j-between a-center">
          <p className="text-title">Blusas</p>
          <Order />
        </div>

        <div className="d-flex">
          <Filtros colores={colores} /* precio={precio} */ tamano={tamano} />
          <Cards cards={cards} />
        </div>
      </div>
    </>
  );
};

export default Products;
