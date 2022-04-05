const InProgressLocalStorage = (ingredient, id, type) => {
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
      } else { console.log('id igual'); }
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
export default InProgressLocalStorage;
