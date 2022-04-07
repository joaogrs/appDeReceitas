const getfromLocalStorage = (key) => {
  const valueLocalStorage = JSON.parse(localStorage.getItem(key));
  if (valueLocalStorage) {
    return valueLocalStorage;
  }
  return [];
};

export default getfromLocalStorage;
