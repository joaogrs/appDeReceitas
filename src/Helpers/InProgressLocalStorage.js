export const InProgressLocalStorage = (ingredient, id, type) => {
  const inProgressStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (inProgressStorage && inProgressStorage[type]) {
    const objRecipe = inProgressStorage[type];
    if (objRecipe[id]) {
      const arrIngredient = objRecipe[id];
      if (arrIngredient.every((item) => item !== ingredient)) {
        localStorage
          .setItem('inProgressRecipes', JSON
            .stringify({
              ...inProgressStorage,
              [type]: {
                ...objRecipe, [id]: [...arrIngredient, ingredient] } }));
      }
    } else {
      localStorage
        .setItem('inProgressRecipes', JSON
          .stringify({ ...inProgressStorage,
            [type]: {
              ...objRecipe, [id]: [ingredient] } }));
    }
  } else {
    const obj = { [id]: [ingredient] };
    localStorage
      .setItem('inProgressRecipes', JSON
        .stringify({ ...inProgressStorage, [type]: obj }));
  }
};

export const getIngredients = (type, id) => {
  const valueLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (!valueLocalStorage) { return []; }
  console.log(valueLocalStorage);
  if (type === 'foods') {
    if (!valueLocalStorage.meals[id]) {
      return [];
    }
    if (valueLocalStorage.meals[id] && type === 'foods') {
      return valueLocalStorage.meals[id];
    }
  }
  if (type === 'drinks') {
    if (!valueLocalStorage.cocktails[id]) {
      return [];
    }
    if (valueLocalStorage.cocktails[id] && type === 'drinks') {
      return valueLocalStorage.cocktails[id];
    }
  }
};
