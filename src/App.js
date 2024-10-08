// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
// import Potato from './Potato';

function Food({ name, picture, idx, rating }) {
  return (
    <div key={idx}>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  )
}

// Food prop 확인
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  // rating: PropTypes.number.isRequired
  rating: PropTypes.number
}


const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSc07624.jpg',
    rating: 4.9
  },
];

// map() 함수의 1번째 인자로 전달할 함수를 분리
// console 오류 막기 위해서 컴포넌트마다 고유 key값 설정해서 전달
// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// }

// map() 함수의 1번째 인자로 전달할 함수를 분리(화살표 함수 버전)
// console 오류 막기 위해서 컴포넌트마다 고유 key값 설정해서 전달
// const renderFood = (dish, idx) => <Food name={dish.name} picture={dish.image} key={idx} />;

function App() {
  // console.log(foodILike.map(renderFood));
  // 'key' props는 리액트 내부에서 사용되는 특수한 props라서 Food 컴포넌트에 직접 전달되지는 않음
  return (
    <div>
      {foodILike.map((dish, idx) => (
        <Food name={dish.name} picture={dish.image} key={idx} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
