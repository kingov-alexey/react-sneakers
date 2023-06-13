import React, { useState } from 'react';
import styles from './Card.module.scss';

function Card({onClickFavorite, imageUrl, name, price, onPlus }) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    onPlus({imageUrl, name, price});
    setIsAdded(!isAdded);
  };

  React.useEffect(()=>{
    console.log('isAdded был изменен');
  },[isAdded]);

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src='/img/heart-liked.svg' alt='Unliked' />
      </div>
      <img width={133} height={112} src={imageUrl} alt='Sneakers' />
      <h5>{name}</h5>
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
