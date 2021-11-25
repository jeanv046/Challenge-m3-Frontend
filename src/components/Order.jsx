import React from 'react'
import arrow from '../assets/img/chevron-down-solid.svg'

/* Esto es para ordenar de mas reciente a mas antiguo */
/* http://localhost:5000/products?_sort=date&_order=desc  */

/* Esto es para ordena de mayor precio a menor precio */
/* http://localhost:5000/products?_sort=price&_order=desc */

/* Esto es para ordena de menor precio a mayor precio */
/* http://localhost:5000/products?_sort=price&_order=asc */

const Order = (props) => {
    return ( 
        <div className="container-select">
            <select onChange={ props.handle } className="select-order" name="" id="" >
                <option selected >Ordernar por:</option>
                <option value="0">Mas recentes</option>
                <option value="1">Menor preço</option>
                <option value="2">Maior preço</option>
            </select>
            <img src={arrow} alt="arrow" className="icon-arrow" />
        </div>
     );
}
 
export default Order;