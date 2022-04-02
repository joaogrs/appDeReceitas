import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import IngredientsList from './IngredientsList';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function Details({ dataOfDetails, path }) {
  const [btnShareshow, setBtnShareShow] = useState(true);
  // const LINK = 'Link copied!';
  const TWO_SECONDS = 2000;
  const clickShareRecipe = async (object) => {
    if (Object.keys(object)[0] === 'idMeal') {
      await copy(`http://localhost:3000/foods/${object.idMeal}`);
      // global.alert(LINK);
      setBtnShareShow(false);
      setTimeout(() => {
        setBtnShareShow(true);
      }, TWO_SECONDS);
    }
    if (Object.keys(object)[0] === 'idDrink') {
      await copy(`http://localhost:3000/drinks/${object.idDrink}`);
      // global.alert(LINK);
      setBtnShareShow(false);
      setTimeout(() => {
        setBtnShareShow(true);
      }, TWO_SECONDS);
    }
  };

  const clickFavoriteRecipe = () => {
    console.log('Clicou Favoritar');
  };

  return (
    path.includes('drinks') ? (
      <section data-testid="recipe-details">
        <img
          data-testid="recipe-photo"
          src={ dataOfDetails.strDrinkThumb }
          alt="recipe-img"
        />
        <h1 data-testid="recipe-title">{dataOfDetails.strDrink}</h1>
        {btnShareshow ? (
          <input
            type="image"
            onClick={ () => { clickShareRecipe(dataOfDetails); } }
            data-testid="share-btn"
            src={ shareIcon }
            alt="compartilhar"
          />) : (<button type="button">Link copied!</button>
        )}
        <input
          type="image"
          data-testid="favorite-btn"
          alt="favoritar"
          src={ whiteHeartIcon }
          onClick={ () => { clickFavoriteRecipe(); } }
        />
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
        { btnShareshow ? (
          <input
            type="image"
            onClick={ () => { clickShareRecipe(dataOfDetails); } }
            data-testid="share-btn"
            src={ shareIcon }
            alt="compartilhar"
          />) : (<button type="button">Link copied!</button>
        )}
        <input
          type="image"
          data-testid="favorite-btn"
          alt="favoritar"
          src={ whiteHeartIcon }
          onClick={ () => { clickFavoriteRecipe(); } }
        />
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
