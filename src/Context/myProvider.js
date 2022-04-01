import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

function Provider({ children }) {
  const [isHiddenSearchBar, setVisibleSearchBar] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(true);
  const [apiData, setApiData] = useState([]);
  const [categoriesFoods, setCategoriesFoods] = useState([]);
  const [categoriesDrinks, setCategoriesDrinks] = useState([]);
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [doneRecipesFilter, setDoneRecipesFilter] = useState([]);
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
    doneRecipes,
    setDoneRecipes,
    doneRecipesFilter,
    setDoneRecipesFilter,
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
