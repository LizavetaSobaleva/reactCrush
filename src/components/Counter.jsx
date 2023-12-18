import React, { useState } from "react";
import MainButton from "./UI/button/MainButton";
import MyBlock from "./UI/block/MyBlock";


export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  return (
    <MyBlock>
      <h1 className="result">{count}</h1>
      <div className="buttons">
      <MainButton onClick={increment}>Increment</MainButton>
      <MainButton onClick={decrement}>Dectement</MainButton>
      </div>
    </MyBlock>
  );
}
