import React, { useState } from "react";

const Intro = () => {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };

	const Decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className='mt-5 text-center'>
      <div>{count}</div>
			<button disabled={count === 0} onClick={Decrement}>-</button>
			<button onClick={Increment}>+</button>
    </div>
  );
};

export default Intro;
