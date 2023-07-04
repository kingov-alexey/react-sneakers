import React from "react";
import Card from "../../components/Card/Card";
import  AppContext from "../../context";
import axios from "axios";


function Orders() {
  const {onAddToFavorite, onAddToCart, pathBackendApi} = React.useContext(AppContext);
  const [isLoading, setIsLoading] = React.useState(true);
  // console.log(pathBackendApi);

  const [orders, setOrders] = React.useState([]); 
 
  React.useEffect(()=>{
    (async()=>{
      try {
        const {data} = await axios.get(`${pathBackendApi}/table-orders`);
        //вариант1
      // console.log(data.map((obj) => obj.items).flat());
      // console.log(data.reduce((prev, obj) => [...prev, ...obj.items], []).flat());
      setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []).flat());
      setIsLoading(false);
        
      } catch (error) {
        alert('Ошибка при запросе заказов');
        console.error(error);
      }
   
    })();
  }, []);
  
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои заказы</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(10)] : orders).map((item, index) => (
           <Card
           key={index}


           {...item}
           loading={isLoading}
         />
        ))}
      </div>
    </div>
  );
}

export default Orders;
