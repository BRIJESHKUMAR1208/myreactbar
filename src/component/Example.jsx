import React, { useState } from 'react';

const Example = () => {
  // Declare a state variable named "count" and initialize it to 0
  const [count, setCount] = useState(0);

  const increment = () => { setCount(count + 1);};

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Example;
