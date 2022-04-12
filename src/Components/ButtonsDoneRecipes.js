import React, { useContext } from 'react';
import myContext from '../Context/myContext';
import '../styles/btn_done_recipes.css';

const ButtonsDoneRecipes = () => {
  const { doneRecipes, setDoneRecipesFilter } = useContext(myContext);
  const filterByAll = () => {
    setDoneRecipesFilter(doneRecipes);
  };
  const filterByFood = () => {
    const foodFilter = doneRecipes.filter((recipe) => (recipe.type === 'food'));
    setDoneRecipesFilter(foodFilter);
  };
  const filterByDrink = () => {
    const drinksFilter = doneRecipes.filter((recipe) => (recipe.type === 'drink'));
    setDoneRecipesFilter(drinksFilter);
  };
  return (
    <div className="btns_recipes">
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
