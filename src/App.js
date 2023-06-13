import React from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import { useState } from 'react';

function App() {


  
  const onClickFavorite = () => {
    alert('onClickFavorite');
  };

  // https://6487f9130e2469c038fcb5cd.mockapi.io/items
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCarOpened] = React.useState(false);

React.useEffect(()=>{
  fetch('https://6487f9130e2469c038fcb5cd.mockapi.io/items').then((res)=>{
    return res.json();
  }).then(json =>{
    // console.log(json);
    setItems(json);
  });
},[]);

const onAddToCart = (obj) => {
  setCartItems(prev => [...prev, obj])

}

console.log(cartItems);

  let onClickCart = ()=>{
    setCarOpened(!cartOpened);
  }

  return (
    <div className='wrapper clear'>
      {/* {cartOpened ? <Drawer onClickCart={onClickCart}/> : null} */}
      {cartOpened && <Drawer items={cartItems} onClickCart={onClickCart}/>}

      <Header onClickCart={onClickCart} />

      <div className='content p-40'>
        <div className='d-flex align-center mb-40 justify-between'>
          <h1>Все кроссовки</h1>
          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='Search' />
            <input type='text' placeholder='Поиск...' />
          </div>
        </div>

        <div className='d-flex flex-wrap'>
          {items.map(item => (
            <Card
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              onClickFavorite={onClickFavorite}
              onPlus={(obj)=>{onAddToCart(item)}}
              
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
