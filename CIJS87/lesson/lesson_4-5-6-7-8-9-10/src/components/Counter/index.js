import { useState } from "react";

import "./style.css";

const Counter = ({ isVisibleCounter }) => {
  const [count, setCount] = useState(0);

  const clickIncreaseCount = () => {
    setCount(count + 1);
  };

  const clickDecreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      {isVisibleCounter && (
        <div className="counter">
          <h1>{count}</h1>
          <button onClick={clickIncreaseCount}>Increase</button>
          <button onClick={clickDecreaseCount}>Decrease</button>
        </div>
      )}
    </>
  );
};

export default Counter;
