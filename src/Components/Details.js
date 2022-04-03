import React from 'react';
import PropTypes from 'prop-types';
// import myContext from '../Context/myContext';
import IngredientsList from './IngredientsList';
import ShareButtonDetailsRecipes from './ShareButtonDetailsRecipes';
import FavoriteButtonRecipes from './FavoriteButtonRecipes';

function Details({ dataOfDetails, path }) {
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
