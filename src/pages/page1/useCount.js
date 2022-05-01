import { useCallback, useState } from "react";

export function useCount(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const add = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return { count, add, reset };
}
