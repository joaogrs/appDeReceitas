import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import myContext from '../Context/myContext';
import IngredientsList from './IngredientsList';
import ShareButtonDetailsRecipes from './ShareButtonDetailsRecipes';
import FavoriteButtonRecipes from './FavoriteButtonRecipes';

function Details({ dataOfDetails, path }) {
  const { setdetailRecipeInfo } = useContext(myContext);

  useEffect(() => {
    setdetailRecipeInfo([dataOfDetails]);
    // const functeste = () => {
    //   let teste2;
    //   const favoritesLocalStore = getfavoriteFoodLocalStore();
    //   console.log('local storage', favoritesLocalStore);
    //   if (detailRecipeInfo[0].idDrink) {
    //     teste2 = favoritesLocalStore
    //       .some((item) => item.id === detailRecipeInfo[0].idDrink);
    //     // setIsFavoriteBtn((prevState) => (!prevState));
    //   } else if (detailRecipeInfo[0].idMeal) {
    //     teste2 = favoritesLocalStore
    //       .some((item) => item.id === detailRecipeInfo[0].idMeal);
    //     // setIsFavoriteBtn((prevState) => (!prevState));
    //   }
    //   setIsFavoriteBtn(teste2);
    // };
    // functeste();
  }, [dataOfDetails]);

  return (
    path.includes('drinks') ? (
      <section data-testid="recipe-details">
        <img
          data-testid="recipe-photo"
          src={ dataOfDetails.strDrinkThumb }
          alt="recipe-img"
        />
        <h1 data-testid="recipe-title">{dataOfDetails.strDrink}</h1>
        <ShareButtonDetailsRecipes />
        <FavoriteButtonRecipes />
        <p data-testid="recipe-category">{dataOfDetails.strAlcoholic}</p>
        <IngredientsList dataDetails={ dataOfDetails } />
        <div>
          <h2>Instructions</h2>
          <p data-testid="instructions">{dataOfDetails.strInstructions}</p>
        </div>
        <div data-testid="$index-recomendation-card">receitas recomendadas</div>
        <button data-testid="start-recipe-btn" type="button">iniciar receita</button>
      </section>
    ) : (
      <section data-testid="recipe-details">
        <img
          data-testid="recipe-photo"
          src={ dataOfDetails.strMealThumb }
          alt="recipe-img"
        />
        <h1 data-testid="recipe-title">{dataOfDetails.strMeal}</h1>
        <ShareButtonDetailsRecipes />
        <FavoriteButtonRecipes />
        <h3 data-testid="recipe-category">{dataOfDetails.strCategory}</h3>
        <IngredientsList dataDetails={ dataOfDetails } />
        <div>
          <h2>Instructions</h2>
          <p data-testid="instructions">{dataOfDetails.strInstructions}</p>
        </div>
        <a data-testid="video" href={ dataOfDetails.strYoutube }>Video</a>
        <div data-testid="$index-recomendation-card">receitas recomendadas</div>
        <button data-testid="start-recipe-btn" type="button">iniciar receita</button>
      </section>
    )
  );
}

Details.propTypes = {
  dataOfDetails: PropTypes.objectOf.isRequired,
  path: PropTypes.string.isRequired,
};

export default Details;
