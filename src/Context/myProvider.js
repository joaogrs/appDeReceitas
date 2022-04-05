import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

function Provider({ children }) {
  const [isHiddenSearchBar, setVisibleSearchBar] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(true);
  const [apiData, setApiData] = useState([]);
  const [categoriesFoods, setCategoriesFoods] = useState([]);
  const [categoriesDrinks, setCategoriesDrinks] = useState([]);
  const [detailRecipeInfo, setdetailRecipeInfo] = useState([]);
  const [recipeInProgress, setRecipeInProgress] = useState([]);
  const [drinkInProgress, setDrinkInProgress] = useState([]);
  const [isFavoriteBtn, setIsFavoriteBtn] = useState(false);
  const [disablebtnFinishRecipe, setdisablebtnFinishRecipe] = useState(true);
  const stateContext = {
    isHiddenSearchBar,
    setVisibleSearchBar,
    showSearchInput,
    setShowSearchInput,
    apiData,
    setApiData,
    categoriesFoods,
    setCategoriesFoods,
    categoriesDrinks,
    setCategoriesDrinks,
    detailRecipeInfo,
    setdetailRecipeInfo,
    isFavoriteBtn,
    setIsFavoriteBtn,
    recipeInProgress,
    setRecipeInProgress,
    drinkInProgress,
    setDrinkInProgress,
    // unfinishedRecipes,
    // setUnfinishedRecipes,
    disablebtnFinishRecipe,
    setdisablebtnFinishRecipe,
  };

  return (
    <MyContext.Provider value={ stateContext }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default Provider;
