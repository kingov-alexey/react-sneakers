import React from "react";

import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  const pathBackendApi = "http://localhost:9999"; //путь к api
  const [items, setItems] = React.useState([]); //Кросовки на складе
  const [cartItems, setCartItems] = React.useState([]); //кросовки в корзине
  const [favorites, setFavorites] = React.useState([]); //желаемые кросовки
  const [cartOpened, setCarOpened] = React.useState(false); //тогл боковой панели
  const [searchValue, setSearchValue] = React.useState(""); //строка поиска

  //* ****** Начало ЭНДПОИНТОВ */

  // * ********* table-CART CRUD *************************
  //CREATE ELEMENT IN CART
  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
    axios.post(`${pathBackendApi}/table-cart`, obj);
  };

  //READ ELEMENT FROM CART
  const onReadTableCart = () => {
    axios.get(`${pathBackendApi}/table-cart`).then((res) => {
      setCartItems(res.data);
    });
  };

  //UPDATE ELEMENT IN CART
  //..

  // DELETE ELEMENT FROM CART
  const onRemoveFromCart = (id) => {
    axios.delete(`${pathBackendApi}/table-cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ********** table-sneakers CRUD *************************
  //CREATE ELEMENT IN CNEAKERS
  const onReadTableSneakers = (obj) => {
    axios.get(`${pathBackendApi}/table-sneakers`).then((res) => {
      setItems(res.data);
    });
  };

  // ********** table-favorites CRUD *************************
  // CREATE table-favotites
  
  const onAddToFavorite = (obj) => {
    axios.post(`${pathBackendApi}/table-favorites`, obj);
    setFavorites((prev) => [...prev, obj]);
  };
  
    
  
      const onReadTableFavorite = () => {
    axios.get(`${pathBackendApi}/table-favorites`).then((res) => {
      setFavorites(res.data);
    });
  }


  

  //=================================================================

  // ************************************ Методы
  //toggle открыта закрыта панель корзины
  let onClickCart = () => {
    setCarOpened(!cartOpened);
  };

  //clearInputSearch очистка поля поиска
  let clearInputSearch = () => {
    setSearchValue("");
  };

  //При изменении фиксировать строку поиска
  const onChangeSearchInput = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  //хук юз эффект...
  React.useEffect(() => {
    onReadTableCart();
    onReadTableSneakers();
    onReadTableFavorite();
  }, []);

  return (
    <div className="wrapper clear">
      {/* можно так */}
      {/* {cartOpened ? <Drawer onClickCart={onClickCart}/> : null} */}
      {/* а можно верез && */}
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClickCart={onClickCart}
          onRemoveFromCart={onRemoveFromCart}
        />
      )}

      <Header onClickCart={onClickCart} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              clearInputSearch={clearInputSearch}
            />
          }
        />
        <Route path="/favorites" element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite} />} />
      </Routes>
    </div>
  );
}

export default App;
