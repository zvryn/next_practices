"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("Hello World");
  const minusClick = () => setCount(count - 1);
  const plusClick = () => setCount(count + 1);
  return (
    <div className="flex flex-col">
      <button className="text-7xl" onClick={minusClick}>
        -
      </button>
      <button className="text-7xl">{count}</button>
      <button className="text-7xl" onClick={plusClick}>
        +
      </button>
    </div>
  );
};

export default Counter;
