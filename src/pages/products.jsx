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
  const [filterColor, setFilterColor] = useState([]);
  const [filterTalla, setFilterTalla] = useState([]);
  const ranges = [
    { option: 1, min: 0, max: 50 },
    { option: 2, min: 51, max: 150 },
    { option: 3, min: 151, max: 300 },
    { option: 4, min: 301, max: 500 },
    { option: 5, min: 500 },
  ];
  const [filterRangePrice, setFilterRangePrice] = useState([]);
  const search_options = [`?_page=${page}&_limit=9`];
  const host = process.env.REACT_APP_URL_HOST;

  let url = host + `/products`;
  /* const [precio] = useState([]); */
  function onChangeFilterColor(e) {
    if (e.target.checked) {
      setFilterColor([...filterColor, e.target.value]);
    } else {
      setFilterColor(filterColor.filter((value) => value !== e.target.value));
    }
  }
  function onChangeFilterTalla(e) {
    if (e.target.checked) {
      setFilterTalla([...filterTalla, e.target.value]);
    } else {
      setFilterTalla(filterTalla.filter((value) => value !== e.target.value));
    }
  }
  function onChangeFilterRangePrice(e) {
    if (e.target.checked) {
      setFilterRangePrice([
        ...filterRangePrice,
        ranges.filter((range) => range.option === Number(e.target.value))[0],
      ]);
      /* ranges.filter((range) => range.option === Number(e.target.value) ); */
    } else {
      setFilterRangePrice(
        filterRangePrice.filter((range) => range.option !== Number(e.target.value))
      );
      /* console.log(ranges.filter((range) => range.option === Number(e.target.value))) */
    }

  }

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

          /* console.log(cards); */
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
    let newurl = url + search_options[0] + optionOrdering[position];
    consumir_api(newurl, false);
    console.log(event.target.value);
  }

  useEffect(() => {
    setPages(page);
    /* console.log("Entro"); */
    consumir_api(url + search_options[0]);
    // eslint-disable-next-line
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
            <Filtros
              onChangeFilterColor={onChangeFilterColor}
              onChangeFilterTalla={onChangeFilterTalla}
              onChangeFilterRangePrice={onChangeFilterRangePrice}
              colores={colores}
              tamano={tamano}
              ranges={ranges}
            />
            <Cards
              cards={cards}
              filterColor={filterColor}
              filterTalla={filterTalla}
              filterRangePrice={filterRangePrice}
            />
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
