import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [hits, setHits] = useState(0);

  useEffect(() => {
    setBalls(0);
    setStrikes(0);
  }, [hits])

  useEffect(() => {
    strikes < 2 && fouls > 0
    ? setStrikes(strikes + 1)
    : setStrikes(strikes)
  }, [fouls])

  const addStrikes = e => {
    strikes < 3
    ? setStrikes(strikes + 1)
    : setStrikes(0)
  }

  const addBalls = e => {
    balls < 4
    ? setBalls(balls + 1)
    : setBalls(0)
  }

  const addHits = e => {
    setHits(hits + 1)
  }

  const addFouls = e => {
    setFouls(fouls + 1)
  }

  return (
    <div className="App">

      <h2>Strikes: { strikes } 
      <button onClick={ addStrikes }>+</button></h2>

      <h2>Balls: { balls } 
      <button onClick={ addBalls }>+</button></h2>

      <h2>Fouls: { fouls } 
      <button onClick={ addFouls }>+</button></h2>

      <h2>Hits: { hits } 
      <button onClick={ addHits }>+</button></h2>

    </div>
  );
}

export default App;
