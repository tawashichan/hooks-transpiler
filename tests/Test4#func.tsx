import React, { useState, useLayoutEffect } from "react";

export const App: React.FC = () => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
