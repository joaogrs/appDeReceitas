const phrase = 'Sorry, we haven\'t found any recipes for these filters.';

export const alertRecipesNotFound = async (dataApi) => {
  if (await dataApi === 'Unexpected end of JSON input') {
    global.alert(phrase);
  }
  if (await dataApi.meals === null) {
    global.alert(phrase);
  }
  if (await dataApi.drinks === null) {
    global.alert(phrase);
  }
};

export const alertOneLetter = (searchOption, searchInput) => {
  if (searchOption === 'firstLetter' && searchInput.length > 1) {
    global.alert('Your search must have only 1 (one) character');
  }
};
