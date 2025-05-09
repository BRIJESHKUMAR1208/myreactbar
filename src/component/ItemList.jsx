import React, { useState } from 'react';

const ItemList = () => {
  // Declare a state variable named "count" and initialize it to 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default ItemList;
