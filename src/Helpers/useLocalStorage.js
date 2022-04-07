import { useEffect, useState } from 'react';

const getLocalStorage = (key, initialValue) => {
  const valueLocalStorage = localStorage.getItem(key);
  return valueLocalStorage ? JSON.parse(valueLocalStorage) : initialValue;
};

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => getLocalStorage(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
