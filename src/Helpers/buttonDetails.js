export const getLocalStorageInProgress = (pathname) => {
  const arrPath = pathname.split('/');
  const typePath = arrPath[1];
  const idPath = arrPath[2];
  const inProgressStorage = JSON.parse(localStorage.getItem('inProgressRecipes')) || '';
  let type;

  if (inProgressStorage && typePath === 'foods') {
    type = 'meals';
  }

  if (inProgressStorage && typePath === 'drinks') { type = 'cocktails'; }

  if (!inProgressStorage[type] || !inProgressStorage[type][idPath]) { return false; }

  if (inProgressStorage[type][idPath]) {
    return true;
  }
  return false;
};

export const getLocalStorageDoneRecipes = (pathname) => {
  const arrPath = pathname.split('/');
  const idPath = arrPath[2];
  const doneRecipesStorage = JSON.parse(localStorage.getItem('doneRecipes'));
  if (!doneRecipesStorage) {
    return false;
  }
  if (doneRecipesStorage) {
    return doneRecipesStorage.some((recipe) => recipe.id === idPath);
  }
};
