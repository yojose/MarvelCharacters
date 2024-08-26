import { useEffect, useState } from 'react';

export const useDelay = (value:string, delay = 500) => {
  const [delayValue, setDelayValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return delayValue;
};