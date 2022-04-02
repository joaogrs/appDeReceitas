import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import IngredientsList from './IngredientsList';
import RecomendationCard from './RecomendationCard';
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
  const [video, setVideo] = useState('');

  useEffect(() => {
    const { strYoutube } = dataOfDetails;
    setVideo(strYoutube);
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
        <h2 data-testid="recipe-category">{dataOfDetails.strAlcoholic}</h2>
        <IngredientsList dataDetails={ dataOfDetails } />
        <div>
          <h2>Instructions</h2>
          <p data-testid="instructions">{dataOfDetails.strInstructions}</p>
        </div>
        <RecomendationCard path={ path } />
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
        <button data-testid="start-recipe-btn" type="button">iniciar receita</button>
      </section>
    )
  );
}

Details.propTypes = {
  dataOfDetails: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

export default Details;
