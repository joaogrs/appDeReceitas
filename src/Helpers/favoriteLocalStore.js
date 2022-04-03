export const favoriteFoodLocalStore = (object) => {
  const favoritesLocalStore = JSON.parse(localStorage.getItem('favoriteRecipes'));
  console.log('busca por key', favoritesLocalStore);
  if (favoritesLocalStore && favoritesLocalStore
    .every((item) => item.id !== object.id)) {
    localStorage
      .setItem('favoriteRecipes', JSON.stringify([...favoritesLocalStore, object]));
  } else {
    console.log('else do favoriteFoodLocalStore');
    localStorage.setItem('favoriteRecipes', JSON.stringify([object]));
  }
};

export const getfavoriteFoodLocalStore = () => {
  const favoritesLocalStore = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (favoritesLocalStore) {
    return favoritesLocalStore;
  }
  return [];
};

export const newFavoriteFoodLocalStore = (array) => {
  localStorage.setItem('favoriteRecipes', JSON.stringify([...array]));
};
