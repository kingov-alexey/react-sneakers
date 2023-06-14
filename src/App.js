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
  const [searchValue, setSearchValue] = React.useState('');

React.useEffect(()=>{
  fetch('https://6487f9130e2469c038fcb5cd.mockapi.io/items').then((res)=>{
    return res.json();
  }).then(json =>{
    setItems(json);
  });
},[]);

const onAddToCart = (obj) => {
  setCartItems(prev => [...prev, obj])

}

  let onClickCart = ()=>{
    setCarOpened(!cartOpened);
  }

  const onChangeSearchInput = (event)=>{
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return (
    <div className='wrapper clear'>
      {/* можно так */}
      {/* {cartOpened ? <Drawer onClickCart={onClickCart}/> : null} */}
      {/* а можно так */}
      {cartOpened && <Drawer items={cartItems} onClickCart={onClickCart}/>}

      <Header onClickCart={onClickCart} />

      <div className='content p-40'>
        <div className='d-flex align-center mb-40 justify-between'>
          <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кросовки'}</h1>
          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='Search' />
            
            <input type='text' placeholder='Поиск...' value={searchValue} onChange={onChangeSearchInput}/>
          </div>
        </div>

        <div className='d-flex flex-wrap'>
          {items.map((item, index) => (
            <Card
              key={index}
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
