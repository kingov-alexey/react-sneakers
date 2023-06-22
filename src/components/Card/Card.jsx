import React, { useState } from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Card.module.scss';

function Card({
  id,
  onFavorite,
  onAddToFavorite,
  imageUrl,
  title,
  price,
  onPlus,
  favorited = false,
  added = false,
  loading = false,
}) {
  const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    onFavorite({ id, title, imageUrl, price });
  };

  const onClickPlus = () => {
    onPlus({ id, imageUrl, title, price });
    setIsAdded(!isAdded);
  };

  const onClickCard = () => {
    alert('onClickCard показать модалку');
  };

  React.useEffect(() => {}, [isAdded]);

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={3}
          width={156}
          height={275}
          viewBox='0 0 156 275'
          backgroundColor='#cccccc'
          foregroundColor='#ffffff'
        >
          <rect x='0' y='0' rx='9' ry='9' width='32' height='32' />
          <rect x='0' y='50' rx='25' ry='25' width='156' height='112' />
          <rect x='0' y='182' rx='9' ry='9' width='156' height='15' />
          <rect x='0' y='203' rx='9' ry='9' width='119' height='15' />
          <rect x='2' y='234' rx='7' ry='7' width='62' height='13' />
          <rect x='0' y='252' rx='7' ry='7' width='96' height='13' />
          <rect x='124' y='234' rx='9' ry='9' width='32' height='32' />
        </ContentLoader>
      ) : (
        <>
          <div
            className={styles.favorite}
            onClick={() => {
              onClickFavorite({ id, imageUrl, title, price });
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
        </>
      )}
    </div>
  );
}

export default Card;
