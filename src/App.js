// import logo from './logo.svg';
// import './App.css';
import React from 'react';
// import Potato from './Potato';

function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" something={true} papapapa={['hello', 1, 2, 3, 4, true]} />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
