// import logo from './logo.svg';
// import './App.css';
import React from 'react';
// import Potato from './Potato';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  )
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSc07624.jpg',
  },
];

// map() 함수의 1번째 인자로 전달할 함수를 분리
// console 오류 막기 위해서 컴포넌트마다 고유 key값 설정해서 전달
// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// }

// map() 함수의 1번째 인자로 전달할 함수를 분리(화살표 함수 버전)
// console 오류 막기 위해서 컴포넌트마다 고유 key값 설정해서 전달
const renderFood = dish => <Food name={dish.name}  picture={dish.image} />

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
