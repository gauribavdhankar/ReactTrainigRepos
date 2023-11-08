import { useState } from "react";

// Custom hook useCounter

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return {
    count,
    increment,
    decrement,
    reset,
  };
}