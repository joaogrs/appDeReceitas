import React, { useContext } from 'react';
import myContext from '../Context/myContext';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { getfavoriteFoodLocalStore,
  newFavoriteFoodLocalStore } from '../Helpers/favoriteLocalStore';

const FavoriteButtonFavoriteRecipes = (info) => {
  const { index } = info;
  const { setFavoriteRecipes, setFavoriteRecipesFilter } = useContext(myContext);
  const verifyLocalStoreFoodOrDrink = (favoriteLocalStore, id) => {
    // console.log('estão no local Store', favoriteLocalStore);
    const favoriteLocalStoreFilter = favoriteLocalStore
      .filter((item) => item.id !== id);
    // console.log('Novas favorites', favoriteLocalStoreFilter);
    newFavoriteFoodLocalStore(favoriteLocalStoreFilter);
    setFavoriteRecipes(favoriteLocalStoreFilter);
    setFavoriteRecipesFilter(favoriteLocalStoreFilter);
  };

  const clickNotFavoriteRecipe = () => {
    const { id } = info;
    // console.log('clicou Desfavoritar');
    // console.log('info', info);
    // console.log(id);
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
