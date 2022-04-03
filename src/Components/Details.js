import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IngredientsList from './IngredientsList';
import ShareButtonDetailsRecipes from './ShareButtonDetailsRecipes';
import FavoriteButtonRecipes from './FavoriteButtonRecipes';
import RecomendationCard from './RecomendationCard';

function Details({ dataOfDetails, path, history }) {
  const [video, setVideo] = useState('');

  useEffect(() => {
    const { strYoutube } = dataOfDetails;
    setVideo(strYoutube);
  }, [dataOfDetails]);
  const btnIniciarReceitaDrinks = () => {
    const { location } = history;
    history.push(`${location.pathname}/in-progress`);
  };
  const btnIniciarReceitaFoods = () => {
    const { location } = history;
    history.push(`${location.pathname}/in-progress`);
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
        <ShareButtonDetailsRecipes />
        <FavoriteButtonRecipes />
        <p data-testid="recipe-category">{dataOfDetails.strAlcoholic}</p>
        <h2 data-testid="recipe-category">{dataOfDetails.strAlcoholic}</h2>
        <IngredientsList dataDetails={ dataOfDetails } />
        <div>
          <h2>Instructions</h2>
          <p data-testid="instructions">{dataOfDetails.strInstructions}</p>
        </div>
        <RecomendationCard path={ path } />
        <button
          data-testid="start-recipe-btn"
          type="button"
          onClick={ () => { btnIniciarReceitaDrinks(); } }
        >
          iniciar receita
        </button>
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
        {video && (<iframe
          src={ video.replace('watch?v=', 'embed/') }
          data-testid="video"
          title="Youtube Video Player"
          frameBorder="0"
          allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture
          "
          allowFullScreen
        />)}
        <RecomendationCard path={ path } />
        <button
          data-testid="start-recipe-btn"
          type="button"
          onClick={ () => { btnIniciarReceitaFoods(); } }
        >
          iniciar receita
        </button>
      </section>
    )
  );
}

Details.propTypes = {
  dataOfDetails: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
    push: PropTypes.func,
  }).isRequired,
};

export default Details;
