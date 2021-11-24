import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Filtros from "./components/Filtros";

function App() {
  const [resultado, setResultado] = useState({});
  const [colores] = useState([]);
  const [tamano] = useState([]);
  /* const [precio] = useState([]); */

  useEffect(() => {
    const consultarApi = async () => {
      const url = "http://localhost:5000/products";
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
          /* console.log(colores)
          console.log(precio)
          console.log(tamano) */
          setResultado(respuesta.data);
          /* console.log(respuesta); */
        })
        .catch((err) => {
          console.log(err);
        });
    };
    consultarApi();
  }, [colores, tamano]);

  return (
    <>
      <Header />
      <Filtros colores={colores} /* precio={precio} */ tamano={tamano} />
    </>
  );
}

export default App;
