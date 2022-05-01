import { useCallback, useEffect, useState } from "react";

export function useAsyncCount(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const add = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  useEffect(() => {
    setTimeout(() => {
      setCount(100);
    }, 2000);
  }, []);

  return { count, add, reset };
}
