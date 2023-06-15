import React from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import axios from 'axios';

function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCarOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const onClickFavorite = () => {
    alert('onClickFavorite');
  };

  React.useEffect(() => {
    //варимнт нативного применения запроса с помощью fetch
    // fetch('https://6487f9130e2469c038fcb5cd.mockapi.io/items')
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(json => {
    //     setItems(json);
    //   });

    //Вариант get запроса с применением библиотеки axios
    axios.get('https://6487f9130e2469c038fcb5cd.mockapi.io/items').then(res => {
      setItems(res.data);
    });

    axios.get('https://6487f9130e2469c038fcb5cd.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    });
  }, []);

  const onRemoveFromCart = id => {
    console.log('onRemoveFromCart',id);
    
    // пример пост запроса
    axios.delete(`https://6487f9130e2469c038fcb5cd.mockapi.io/cart/${id}`);

    setCartItems(prev => prev.filter(item => item.id !== id));
    
  };

  const onAddToCart = obj => {
    setCartItems(prev => [...prev, obj]);
    axios.post('https://6487f9130e2469c038fcb5cd.mockapi.io/cart', obj);
  };

  const onAddToFavorite = obj => {
    setFavorites(prev => [...prev, obj]);

    axios.post('https://648af67417f1536d65ea077b.mockapi.io/favorites', obj);
  };

  let onClickCart = () => {
    setCarOpened(!cartOpened);
  };

  let clearInputSearch = () => {
    setSearchValue('');
    console.log('clearInputSearch click');
  };

  const onChangeSearchInput = event => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className='wrapper clear'>
      {/* можно так */}
      {/* {cartOpened ? <Drawer onClickCart={onClickCart}/> : null} */}
      {/* а можно так */}
      {cartOpened && (
        <Drawer items={cartItems} onClickCart={onClickCart} onRemoveFromCart={onRemoveFromCart} />
      )}

      <Header onClickCart={onClickCart} />

      <div className='content p-40'>
        <div className='d-flex align-center mb-40 justify-between'>
          <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кросовки'}</h1>
          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='Search' />
            {searchValue && (
              <img
                className='clear cu-p'
                src='/img/btb-remove.svg'
                alt='Clear'
                onClick={clearInputSearch}
              />
            )}
            <input
              type='text'
              placeholder='Поиск...'
              value={searchValue}
              onChange={onChangeSearchInput}
            />
          </div>
        </div>

        <div className='d-flex flex-wrap'>
          {items
            .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
              <Card
                key={index}
                title={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                onAddToFavorite={obj =>{onAddToFavorite(obj)}
                
                }
                onPlus={obj => {
                  onAddToCart(item);
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
