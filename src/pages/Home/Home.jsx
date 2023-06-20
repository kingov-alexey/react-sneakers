import Card from "../../components/Card/Card";

function Home ({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
    clearInputSearch
}){
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
          {items
            .filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                title={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                onAddToFavorite={(obj) => {
                  onAddToFavorite(obj);
                }}
                onPlus={(obj) => {
                  onAddToCart(item);
                }}
              />
            ))}
        </div>
      </div>
    );

}

export default Home