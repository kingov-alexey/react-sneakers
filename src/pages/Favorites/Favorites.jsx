import Card from "../../components/Card/Card";

function Favorite({ items, onAddToFavorite }) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {items.map((item, index) => (
            <Card
              key={index}
              title={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              favorited={true}
              onFavorite={onAddToFavorite}
   
            />
          ))}
      </div>
    </div>
  );
}

export default Favorite;
