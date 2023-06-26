import React from 'react'
import AppContext from '../../context';

 const Info = ({title, description, image}) => {
    const {setCarOpened} = React.useContext(AppContext);
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
    <img
      className="mb-20"
      width={120}
      height={120}
      src={image}
      alt="empty cart"
    />
    <h2>{title}</h2>
    <p className="opacity-6">
      {description}
    </p>
    <button className="greenButton" onClick={()=>{setCarOpened(false)}}>
      <img src="/img/arrow.svg" alt="Arrow" />
      вернуться назад
    </button>
  </div>
  )
}

export default Info;