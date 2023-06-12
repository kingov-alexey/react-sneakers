import styles from './Card.module.scss';

function Card(props){
    return (
      <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-liked.svg" alt="Unliked" />
      </div>
      <img
        width={133}
        height={112}
        src={props.imageUrl}
        alt="Sneakers"
      />
      <h5>{props.name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button className={styles.button} onClick={props.callback}>
          <img width={11} height={11} src="/img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>

    );
}

export default Card;
