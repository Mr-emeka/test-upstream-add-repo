'use client';

import { useState } from 'react';

interface CounterProps {
  initialCount?: number;
}

export default function Counter({ initialCount = 0 }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialCount);

  return (
    <div>
      <h1 data-testid="counter-value">{count}</h1>
      <button onClick={increment} data-testid="increment-btn">Increment</button>
      <button onClick={decrement} data-testid="decrement-btn">Decrement</button>
      <button onClick={reset} data-testid="reset-btn">Reset</button>
    </div>
  );
}
