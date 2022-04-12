import React, { useContext } from 'react';
import myContext from '../Context/myContext';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { getfavoriteFoodLocalStore,
  newFavoriteFoodLocalStore } from '../Helpers/favoriteLocalStore';
import '../styles/favorites_recipes.css';

const FavoriteButtonFavoriteRecipes = (info) => {
  const { index } = info;
  const { setFavoriteRecipes, setFavoriteRecipesFilter } = useContext(myContext);
  const verifyLocalStoreFoodOrDrink = (favoriteLocalStore, id) => {
    const favoriteLocalStoreFilter = favoriteLocalStore
      .filter((item) => item.id !== id);
    newFavoriteFoodLocalStore(favoriteLocalStoreFilter);
    setFavoriteRecipes(favoriteLocalStoreFilter);
    setFavoriteRecipesFilter(favoriteLocalStoreFilter);
  };

  const clickNotFavoriteRecipe = () => {
    const { id } = info;
    const favoriteLocalStore = getfavoriteFoodLocalStore();
    verifyLocalStoreFoodOrDrink(favoriteLocalStore, id);
  };
  return (
    <div>
      <input
        type="image"
        data-testid={ `${index}-horizontal-favorite-btn` }
        alt="favoritar"
        src={ blackHeartIcon }
        onClick={ () => { clickNotFavoriteRecipe(); } }
      />
    </div>
  );
};

export default FavoriteButtonFavoriteRecipes;
