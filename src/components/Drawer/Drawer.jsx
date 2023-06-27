import React from 'react';

import Info from "../Info/Info";
import AppContext from '../../context';
import styles from './Drawer.module.scss';
import axios from 'axios';

function Drawer({ onClickCart, onRemoveFromCart, items = [] }) {

  const {cartItems, setCartItems, pathBackendApi} = React.useContext(AppContext);

  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false); 


  
  const onClickOrder = async () =>{
    console.log('onClickOrder');
    try {
      setIsLoading(true);
      const {data} = await axios.post(`${pathBackendApi}/table-orders`, {items: cartItems});
      await axios.put(`${pathBackendApi}/table-cart`, []);

// 
// axios.delete(`${pathBackendApi}/table-cart`)
//   .then(response => {
//     console.log('Таблица "table-cart" успешно очищена.');
//   })
//   .catch(error => {
//     console.error('Ошибка при очистке таблицы "table-cart":', error);
//   });

// 

      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
    } catch (error) {
      console.log(error);
      alert('Не удалось создать заказ!');
      
    }
    setIsLoading(false);

  }


  return (
    <div className="overlay" onClick={()=>{onClickCart()}}>
      <div className="drawer" onClick={(event)=>{event.stopPropagation()}}>
        <h2 className="d-flex justify-between  mb-30">
          Корзина
          <img
            className="removeBtn cu-p"
            src="/img/btb-remove.svg"
            alt="Remove"
            onClick={onClickCart}
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
          <div className="items">
            {items.map((obj) => {
              return (
                <div className="cartItem d-flex align-center mb-20" key={obj.id}>
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => {
                      onRemoveFromCart(obj.id);
                    }}
                    className="removeBtn"
                    src="/img/btb-remove.svg"
                    alt="Remove"
                  />
                </div>
              );
            })}
</div>
            <div className="cartTotalBlock">
              <ul>
                <li className="d-flex">
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li className="d-flex">
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>

              <button className="greenButton" onClick={onClickOrder} disabled={isLoading}>
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
          
        ) : ( 
<Info 
title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая" }
description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотябы одну пару кросовок, чтобы сделать заказ" }
image={isOrderComplete ? "img/complete-order.jpg" : "img/empty-cart.jpg" } />
        )} 
      </div>
    </div>
  );
}

export default Drawer;
