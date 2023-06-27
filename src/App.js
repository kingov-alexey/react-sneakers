import React from 'react';

import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';

import AppContext from './context';

function App() {
  const pathBackendApi = 'http://localhost:9999'; //путь к api
  const [items, setItems] = React.useState([]); //Кросовки на складе
  const [cartItems, setCartItems] = React.useState([]); //кросовки в корзине
  const [favorites, setFavorites] = React.useState([]); //желаемые кросовки
  const [cartOpened, setCarOpened] = React.useState(false); //тогл боковой панели
  const [searchValue, setSearchValue] = React.useState(''); //строка поиска
  const [isLoading, setIsLoading] = React.useState(true);

  const isItemAdded = (id)=>{
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  }

  //* ****** Начало ЭНДПОИНТОВ */

  // * ********* table-CART CRUD *************************
  //CREATE ELEMENT IN CART
  const onAddToCart = obj => {
    console.log(obj);
    try {
      if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
        axios.delete(`${pathBackendApi}/table-cart/${obj.id}`);
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        axios.post(`${pathBackendApi}/table-cart`, obj);
        setCartItems(prev => [...prev, obj]);
      }
    } catch (error) {
      console.log('не удалось добавть товар в корзину', error);
    }
  };

  //READ ELEMENT FROM CART
  // const onReadTableCart = () => {

  // };

  //UPDATE ELEMENT IN CART
  //..

  // DELETE ELEMENT FROM CART
  const onRemoveFromCart = id => {
    axios.delete(`${pathBackendApi}/table-cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // ********** table-sneakers CRUD *************************
  //CREATE ELEMENT IN CNEAKERS
  // const onReadTableSneakers = (obj) => {
  //   axios.get(`${pathBackendApi}/table-sneakers`).then((res) => {
  //     setItems(res.data);
  //   });
  // };

  // ********** table-favorites CRUD *************************
  // CREATE table-favotites

  const onAddToFavorite = async obj => {
    try {
      if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`${pathBackendApi}/table-favorites/${obj.id}`);
         setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post(`${pathBackendApi}/table-favorites`, obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert('не удалось добавить в фавориты');
      console.log('не удалось добавить в фавориты', error);
    }
  };

  // const onReadTableFavorite = () => {
  //   axios.get(`${pathBackendApi}/table-favorites`).then((res) => {
  //     setFavorites(res.data);
  //   });
  // };

  //===========================================================

  // ************************************ Методы
  //toggle открыта закрыта панель корзины
  let onClickCart = () => {
    setCarOpened(!cartOpened);
  };

  //clearInputSearch очистка поля поиска
  let clearInputSearch = () => {
    setSearchValue('');
  };

  //При изменении фиксировать строку поиска
  const onChangeSearchInput = event => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  //хук юз эффект...
  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const cartResponse = await axios.get(`${pathBackendApi}/table-cart`);
      const favoriteResponse = await axios.get(`${pathBackendApi}/table-favorites`);
      const sneakersResponse = await axios.get(`${pathBackendApi}/table-sneakers`);
      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoriteResponse.data);
      setItems(sneakersResponse.data);
    }

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, onAddToFavorite, setCarOpened, setCartItems, pathBackendApi}}>
          <div className='wrapper clear'>
      {/* можно так */}
      {/* {cartOpened ? <Drawer onClickCart={onClickCart}/> : null} */}
      {/* а можно верез && */}
      {cartOpened && (
        <Drawer items={cartItems} onClickCart={onClickCart} onRemoveFromCart={onRemoveFromCart} />
      )}

      <Header onClickCart={onClickCart} />

      <Routes>
        <Route
          path='/'
          element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              clearInputSearch={clearInputSearch}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path='/favorites'
          element={<Favorites />}
        />
      </Routes>
    </div>
    </AppContext.Provider>

  );
}

export default App;
