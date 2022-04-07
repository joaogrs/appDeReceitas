const getfromLocalStorage = (key) => {
  const valueLocalStorage = JSON.parse(localStorage.getItem(key));
  if (valueLocalStorage) {
    // console.log('dentro da função get', valueLocalStorage);
    return valueLocalStorage;
  }
  return [];
};

export default getfromLocalStorage;
