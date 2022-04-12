import React, { useContext } from 'react';
import myContext from '../Context/myContext';
import '../styles/favorites_recipes.css';

const ButtonsFiltrarFavorites = () => {
  const { favoritesRecipes, setFavoriteRecipesFilter } = useContext(myContext);
  const filterByAll = () => {
    setFavoriteRecipesFilter(favoritesRecipes);
  };
  const filterByFood = () => {
    const foodFilter = favoritesRecipes.filter((recipe) => recipe.type === 'food');
    setFavoriteRecipesFilter(foodFilter);
  };
  const filterByDrink = () => {
    const drinksFilter = favoritesRecipes.filter((recipe) => recipe.type === 'drink');
    setFavoriteRecipesFilter(drinksFilter);
  };
  return (
    <div className="btn_favorites">
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

export default ButtonsFiltrarFavorites;
