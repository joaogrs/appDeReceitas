import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IngredientsList from './IngredientsList';
import ShareButtonDetailsRecipes from './ShareButtonDetailsRecipes';
import FavoriteButtonRecipes from './FavoriteButtonRecipes';
import RecomendationCard from './RecomendationCard';
import LogoNovo from '../images/logo-novo.png';
import '../styles/footer.css';
import {
  getLocalStorageDoneRecipes, getLocalStorageInProgress } from '../Helpers/buttonDetails';
import '../styles/details.css';

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

  useEffect(() => {
    const { location } = history;
    const { pathname } = location;
    getLocalStorageDoneRecipes(pathname);
    getLocalStorageInProgress(pathname);
  }, []);

  const handleButtonRecipe = () => {
    const { location } = history;
    const { pathname } = location;
    if (getLocalStorageDoneRecipes(pathname)) {
      return '';
    }
    if (getLocalStorageInProgress(pathname)) {
      return (
        <button
          className="btnDetails"
          data-testid="start-recipe-btn"
          type="button"
          onClick={ () => { btnIniciarReceitaFoods(); } }
        >
          Continue Recipe
        </button>
      );
    }
    if (!getLocalStorageInProgress(pathname)) {
      return (
        <button
          className="btnDetails"
          data-testid="start-recipe-btn"
          type="button"
          onClick={ () => { btnIniciarReceitaFoods(); } }
        >
          Start Recipe
        </button>
      );
    }
  };

  const handleButtonDrink = () => {
    const { location } = history;
    const { pathname } = location;
    if (getLocalStorageDoneRecipes(pathname)) {
      return '';
    }
    if (getLocalStorageInProgress(pathname)) {
      return (
        <button
          className="btnDetails"
          data-testid="start-recipe-btn"
          type="button"
          onClick={ () => { btnIniciarReceitaDrinks(); } }
        >
          Continue Recipe
        </button>
      );
    }
    if (!getLocalStorageInProgress(pathname)) {
      return (
        <button
          className="btnDetails"
          data-testid="start-recipe-btn"
          type="button"
          onClick={ () => { btnIniciarReceitaDrinks(); } }
        >
          Start Recipe
        </button>
      );
    }
  };

  return (
    path.includes('drinks') ? (
      <section data-testid="recipe-details" className="details">
        <div className="headerDetails">
          <img src={ LogoNovo } alt="" className="headerImg" />
          <h2>Drink Details</h2>
        </div>
        <div className="containerDetails">
          <img
            className="img_details"
            data-testid="recipe-photo"
            src={ dataOfDetails.strDrinkThumb }
            alt="recipe-img"
          />
          <h1 data-testid="recipe-title" className="title">{dataOfDetails.strDrink}</h1>
          <p data-testid="recipe-category">{dataOfDetails.strAlcoholic}</p>
          <div className="containerFavoriteAndShare">
            <FavoriteButtonRecipes />
            <ShareButtonDetailsRecipes />
          </div>
          <h2 data-testid="recipe-category">{dataOfDetails.strAlcoholic}</h2>
          <IngredientsList dataDetails={ dataOfDetails } />
          <div>
            <h2 className="instructionsTitle">Instructions</h2>
            <p
              data-testid="instructions"
              className="instructions"
            >
              {dataOfDetails.strInstructions}

            </p>
          </div>
          <RecomendationCard path={ path } />
          {handleButtonDrink()}
        </div>
      </section>
    ) : (
      <section data-testid="recipe-details" className="details">
        <div className="headerDetails">
          <img src={ LogoNovo } alt="" className="headerImg" />
          <h2>Recipe Details</h2>
        </div>
        <div className="containerDetails">
          <img
            className="img_details"
            data-testid="recipe-photo"
            src={ dataOfDetails.strMealThumb }
            alt="recipe-img"
          />
          <h1 data-testid="recipe-title" className="title">{dataOfDetails.strMeal}</h1>
          <h3 data-testid="recipe-category">{dataOfDetails.strCategory}</h3>
          <div className="containerFavoriteAndShare">
            <FavoriteButtonRecipes />
            <ShareButtonDetailsRecipes />
          </div>
          <IngredientsList dataDetails={ dataOfDetails } />
          <div>
            <h2 className="instructionsTitle">Instructions</h2>
            <p
              data-testid="instructions"
              className="instructions"
            >
              {dataOfDetails.strInstructions}

            </p>
          </div>
          {video && (<iframe
            src={ video.replace('watch?v=', 'embed/') }
            data-testid="video"
            title="Youtube Video Player"
            frameBorder="0"
            className="videoDetails"
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
          {handleButtonRecipe()}
        </div>
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
