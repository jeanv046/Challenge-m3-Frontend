import React from 'react'
import arrow from '../assets/img/chevron-down-solid.svg'

const Order = () => {
    return ( 
        <div className="container-select">
            <select className="select-order" name="" id="" >
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