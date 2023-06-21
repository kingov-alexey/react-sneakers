import React, { useState } from 'react';
import styles from './Card.module.scss';

function Card({ id, onFavorite, onAddToFavorite, imageUrl, title, price, onPlus, favorited = false }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    // onAddToFavorite(obj);
    onFavorite({id, title, imageUrl, price});
  };

  const onClickPlus = () => {
    onPlus({ imageUrl, title, price });
    setIsAdded(!isAdded);
  };

  const onClickCard = () => {
    alert('onClickCard показать модалку');
  };

  React.useEffect(() => {}, [isAdded]);

  return (
    <div className={styles.card}>
      <div
        className={styles.favorite}
        onClick={() => {
          onClickFavorite({ imageUrl, title, price });
        }}
      >
        <img
          src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'}
          alt={isFavorite ? 'liked' : 'Unliked'}
        />
      </div>

      <div className={styles.slider} onClick={onClickCard}>
        <img width={133} height={112} src={imageUrl} alt='Sneakers' />
      </div>
      <h5>{title}</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
          alt='plus'
          onClick={onClickPlus}
        />
      </div>
    </div>
  );
}

export default Card;
