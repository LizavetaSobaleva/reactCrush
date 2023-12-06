import React, { useState } from "react";
import "./Counter.css";
import MainButton from "../UI/button/MainButton";


export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <h1 className="result">{count}</h1>
      <div className="buttons">
      <MainButton onClick={increment}>Increment</MainButton>
      <MainButton onClick={decrement}>Dectement</MainButton>
      </div>
    </div>
  );
}
