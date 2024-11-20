import React, { useState } from "react";
//here we will create a text that shows counter value and plus minus boxes to increase and decrease the count
//a functional component

function Counter(props) {
  const [count, setCount] = useState(0);
  const IncreaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      Counter
      <div>{count}</div>
      <button onClick={() => decreaseCount()}>Decrease Count - </button>
      <button onClick={() => IncreaseCount()}>Increase Count + </button>
    </div>
  );
}
export default Counter;
