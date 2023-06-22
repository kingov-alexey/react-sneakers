import Card from "../../components/Card/Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  cartItems,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  clearInputSearch,
  isLoading
}) {

    const renderItems = () => {
        const filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase()));
        return (isLoading ? [...Array(10)] : filteredItems).map((item, index) => (
            <Card
              key={index}
              onFavorite={(obj) => {
                onAddToFavorite(obj);
              }}
              onPlus={(obj) => {
                onAddToCart(item);
              }}
              added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
              {...item}
              loading={isLoading}
            />
          ))

    }
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>
          {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кросовки"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              className="clear cu-p"
              src="/img/btb-remove.svg"
              alt="Clear"
              onClick={clearInputSearch}
            />
          )}
          <input
            type="text"
            placeholder="Поиск..."
            value={searchValue}
            onChange={onChangeSearchInput}
          />
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {renderItems()}
      </div>
    </div>
  );
}

export default Home;
