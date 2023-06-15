function Drawer({ onClickCart, onRemoveFromCart, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
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
          <div className="items">
            {items.map((obj, index) => {
              return (
                <div className="cartItem d-flex align-center mb-20" key={index}>
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.name}</p>
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

              <button className="greenButton">
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width={120}
              height={120}
              src="img/empty-cart.jpg"
              alt="empty cart"
            />
            <h2>Пустая корзина</h2>
            <p className="opacity-6">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button className="greenButton" onClick={onClickCart}>
              <img src="/img/arrow.svg" alt="Arrow" />
              вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
