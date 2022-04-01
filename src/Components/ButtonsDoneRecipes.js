// import React from 'react';
import React, { useContext } from 'react';
import myContext from '../Context/myContext';

const ButtonsDoneRecipes = () => {
  const { doneRecipes, setDoneRecipesFilter } = useContext(myContext);
  const filterByAll = () => {
    // console.log('clicou All');
    setDoneRecipesFilter(doneRecipes);
  };
  const filterByFood = () => {
    // console.log('clicou Food');
    const foodFilter = doneRecipes((recipe) => (recipe.type === 'foods'));
    setDoneRecipesFilter(foodFilter);
  };
  const filterByDrink = () => {
    // console.log('clicou Drink');
    const drinksFilter = doneRecipes((recipe) => (recipe.type === 'drinks'));
    setDoneRecipesFilter(drinksFilter);
  };
  return (
    <div>
      <button
        data-testid="filter-by-all-btn"
        type="button"
        onClick={ () => { filterByAll(); } }
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
        onClick={ () => { filterByFood(); } }
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        onClick={ () => { filterByDrink(); } }
      >
        Drinks
      </button>
    </div>
  );
};

export default ButtonsDoneRecipes;
