======

Курс на ютубе:
https://www.youtube.com/watch?v=ptiom4YWqoE&list=PL0FGkDGJQjJEos_0yVkbKjsQ9zGVy3dG7

Дизайн:
https://www.figma.com/file/fw0toTyXMwM1y4WIe0YFrJ/React-Projects?node-id=0%3A1
https://www.figma.com/file/gOcwUBvPlgkT2zPcxkTjFD/React-Sneakers-(Copy)?type=design&node-id=0-1&t=373K9nm0mZIAKRs2-0 (дубликат)

Исходник проекта:
https://github.com/Archakov06/react-sneakers

Библиотека с готовыми классами macro-css:
https://github.com/Archakov06/macro-css

======

### Lesson 1: настройка рабочего пространства, инициализация проекта, верстка главной

======

- reactjs
- nodejs
- vscode

npm install node-sass@4.14.1 (Со слов автора для reacta требуется определенная версия, но она у меня не установилась поэтому пробую npm install node-sass)

npm install macro-css В проекте используется самописная библиотека автора, которую можно устоновить в npm пакета, в данном пакете используются однотипные повторящиеся css стили. Библиотека называется macro-css

### Lesson 2: Верстка, создание компонентов

======

- jsx
- функциональные компоненты

### Lesson 3: метод arr.map(), пропсы

======

- map
- пропсы
- модульный css

### Lesson 4: хук useState, useEffect

======

Попытки запустить проект на домашнем компьютере:

- $ npm install node-sass@latest (помогло)

еще варианты

- npm i sass иии npm i sass-loader

=== по уроку ===

1. Хуки useState, useEffect, useContext
2. будем выводить список кроссовок с сервера с помощью Axios.
3. Сделаем отображение/скрытие корзины при клике на кнопку "Корзина".
4. Если хватит времени, подключим React Router

Пример хука useState:
const [isAdded, setIsAdded] = useState(false);

Пример хука useEffect
React.useEffect(()=>{
console.log('isAdded был изменен');
},[isAdded]);

\_Логический оператор И (&&) (конъюнкция) для набора операндов со значением типа Boolean будет true только в случае, если все операнды содержат значение true. В противном случае это будет false.

В целом, оператор вернёт значение первого ложноподобного операнда при вычислении, либо значение последнего операнда, если все операнды оказались истиноподобными.\_

https://mockapi.io/ - сервис тестового апи

JSON.stringify() - это метод JavaScript, который используется для преобразования значения JavaScript в строку JSON. Он принимает объект или массив JavaScript и возвращает соответствующую JSON-строку.

Вот синтаксис метода JSON.stringify():

JSON.stringify([
{
imageUrl: '/img/sneakers/1.jpg',
name: 'Мужские Кроссовки Nike Blazer Mid Suede',
price: 12999,
},
{
imageUrl: '/img/sneakers/2.jpg',
name: 'Мужские Кроссовки Nike Air Max 270',
price: 15600,
},
{
imageUrl: '/img/sneakers/3.jpg',
name: 'Наименование кросовок 3',
price: 33333333,
},
{
imageUrl: '/img/sneakers/4.jpg',
name: 'Наименование кросовок 4',
price: 4444444,
},
])
'[{"imageUrl":"/img/sneakers/1.jpg","name":"Мужские Кроссовки Nike Blazer Mid Suede","price":12999},{"imageUrl":"/img/sneakers/2.jpg","name":"Мужские Кроссовки Nike Air Max 270","price":15600},{"imageUrl":"/img/sneakers/3.jpg","name":"Наименование кросовок 3","price":33333333},{"imageUrl":"/img/sneakers/4.jpg","name":"Наименование кросовок 4","price":4444444}]'

[
{
"imageUrl": "/img/sneakers/1.jpg",
"name": "Мужские Кроссовки Nike Blazer Mid Suede",
"price": 12999
},
{
"imageUrl": "/img/sneakers/2.jpg",
"name": "Мужские Кроссовки Nike Air Max 270",
"price": 15600
},
{
"imageUrl": "/img/sneakers/3.jpg",
"name": "Наименование кросовок 3",
"price": 33333333
},
{
"imageUrl": "/img/sneakers/4.jpg",
"name": "Наименование кросовок 4",
"price": 4444444
},
{
"imageUrl": "/img/sneakers/5.jpg",
"name": "Наименование кросовок 5",
"price": 5555
},
{
"imageUrl": "/img/sneakers/6.jpg",
"name": "Наименование кросовок 6",
"price": 66666
},
{
"imageUrl": "/img/sneakers/7.jpg",
"name": "Наименование кросовок 7",
"price": 77777
},
{
"imageUrl": "/img/sneakers/8.jpg",
"name": "Наименование кросовок 8",
"price": 888888
},
{
"imageUrl": "/img/sneakers/9.jpg",
"name": "Наименование кросовок 9",
"price": 99999
},
{
"imageUrl": "/img/sneakers/10.jpg",
"name": "Наименование кросовок 10",
"price": 1000000
},
]

FETCH VS AXIOS

 //варимнт нативного применения запроса с помощью fetch
    // fetch('https://6487f9130e2469c038fcb5cd.mockapi.io/items')
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(json => {
    //     setItems(json);
    //   });

    //Вариант get запроса с применением библиотеки axios
    // axios.get('https://6487f9130e2469c038fcb5cd.mockapi.io/items').then(res => {
    //   setItems(res.data);
    // });

### Lesson 5: сохранение в mockAPI
======

посоветовал видео, решил сохранить весь канал, если сам смотрит значит одобряет... https://www.youtube.com/@it-sin9k

...


$ npm install axios - устанавливаем либу для удобной отправки fetch запросов на api

$ npm install -g json-server - устанавливаем либу для фейкого апи json-server

$ json-server --watch db.json --port 9999 - запуск сервера с фейковым апи

$ npm install react-router-dom - устанавливаем либу для маршрутизации страниц



### Lesson 6: Страница Order
======

useContext, createContex

some
added={cartItems.some(obj => obj.id === item.id)} ворачивает тру фолс... если хоть один элемент совпадет то тру

https://skeletonreact.com - либа для отображения загрузки контента...

$ npm i react-content-loader


ES7+ React/Redux/React-Native snippets установка дополнительного расширения для vscode
например rafc создаст болванку реактовского компонента


Заморочился на счет json-server и настроил его для более удобного взаимодействия,
прописал в package.json необходимые настройки

также чтобы запускать проект одной командой устанавливаем еще одну зависимость

$ npm i -D concurrently 
(в моем случае нужно было глобально установить )
$ npm install -g concurrently


и делаем настройки в package.json
  "scripts": {
    "dev": "concurrently \"npm run server\" \"npm start\"",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "json-server -w server/db.json -p 9999"
  },


### Lesson 7: ???

======

https://youtu.be/C_3ZT7j1_jc?list=PL0FGkDGJQjJEos_0yVkbKjsQ9zGVy3dG7&t=6000 01:40:00

кастомные хуки



DEPLOY
$ npm install gh-pages ставим 