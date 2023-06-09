import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";

const arr = [
  {
    name: "Мужские Кроссовки Nike  Blazer Mid Suede",
    price: 12999,
  },
  {
    name: "Мужские Кроссовки Nike  Air Max 270",
    price: 15600,
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />

      <Header />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
