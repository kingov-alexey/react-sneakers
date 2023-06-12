import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';

const callback = () => {
  alert(1114);
};

const arr = [
  {
    imageUrl: '/img/sneakers/1.jpg',
    name: 'Мужские Кроссовки Nike  Blazer Mid Suede',
    price: 12999,
  },
  {
    imageUrl: '/img/sneakers/2.jpg',
    name: 'Мужские Кроссовки Nike  Air Max 270',
    price: 15600,
  },
  {
    imageUrl: '/img/sneakers/3.jpg',
    name: 'Наименование кросовок 3',
    price: 33333333,
  },
];

function App() {
  return (
    <div className='wrapper clear'>
      <Drawer />

      <Header />

      <div className='content p-40'>
        <div className='d-flex align-center mb-40 justify-between'>
          <h1>Все кроссовки</h1>
          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='Search' />
            <input type='text' placeholder='Поиск...' />
          </div>
        </div>

        <div className='d-flex'>
          {arr.map(obj => (
            <Card imageUrl={obj.imageUrl} name={obj.name} price={obj.price} callback={callback} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
