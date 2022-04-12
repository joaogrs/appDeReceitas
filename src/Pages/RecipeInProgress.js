import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import myContext from '../Context/myContext';
import { fetchApi } from '../Helpers/useFetch';
import IngredientsListInProgress from '../Components/IngredientsListInProgress';
import ShareButtonInProgressFoods from '../Components/ShareButtonInProgressFoods';
import FavoriteButtonInProgressFoods from '../Components/FavoriteButtonInProgressFoods';
import { getfavoriteFoodLocalStore } from '../Helpers/favoriteLocalStore';
import { removeDoneRecipesLocalStorage } from '../Helpers/InProgressLocalStorage';
import { setDoneRecipesLocalStorage } from '../Helpers/setDoneRecipesLocalStorage';
// import '../styles/details.css';

function RecipeInProgress(props) {
  const {
    recipeInProgress,
    setRecipeInProgress,
    setIsFavoriteBtn,
    disablebtnFinishRecipe,
  } = useContext(myContext);
  const { history } = props;

  useEffect(() => {
    const setApiFood = async () => {
      const { match } = props;
      const { params } = match;
      const { id } = params;
      const endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      const dataFood = await fetchApi(endpoint);
      setRecipeInProgress([...dataFood.meals]);
    };
    setApiFood();
  }, []);

  useEffect(() => {
    const functeste = () => {
      let teste2;
      const favoritesLocalStore = getfavoriteFoodLocalStore();
      if (recipeInProgress.length > 0) {
        if (recipeInProgress[0].idMeal) {
          teste2 = favoritesLocalStore
            .some((item) => item.id === recipeInProgress[0].idMeal);
        }
        setIsFavoriteBtn(teste2);
      }
    };
    functeste();
  }, [recipeInProgress]);

  const dateFinal = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return today.toLocaleDateString();
  };

  const filterTags = (strTags) => {
    if (strTags === null || strTags === '') { return []; }
    if (strTags) {
      if (strTags.includes(',')) {
        return strTags.split(',');
      }
      return [strTags];
    }
  };

  const handleFinishRecipe = (objectRecipe) => {
    console.log(objectRecipe);
    const {
      idMeal,
      strArea,
      strCategory,
      strMeal,
      strMealThumb,
      strTags,
    } = objectRecipe;

    const objDone = {
      id: idMeal,
      type: 'food',
      nationality: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
      doneDate: dateFinal(),
      tags: filterTags(strTags),
    };

    setDoneRecipesLocalStorage(objDone);

    removeDoneRecipesLocalStorage(idMeal, 'meals');
    history.push('/done-recipes');
  };

  return (
    recipeInProgress.length > 0 && (
      <section className="details">
        <div className="containerDetails">
          <img
            width="30%"
            height="30%"
            data-testid="recipe-photo"
            className="img_details"
            alt={ recipeInProgress[0].idMeal }
            src={ recipeInProgress[0].strMealThumb }
          />
          <h1
            data-testid="recipe-title"
            className="title"
          >
            {recipeInProgress[0].strMeal}

          </h1>
          <div className="containerFavoriteAndShare">
            <ShareButtonInProgressFoods />
            <FavoriteButtonInProgressFoods />
          </div>
          <span data-testid="recipe-category">{ recipeInProgress[0].strCategory }</span>
          <IngredientsListInProgress
            dataDetails={ recipeInProgress[0] }
          />
          <span
            data-testid="instructions"
            className="desc-instructions"
          >
            { recipeInProgress[0].strInstructions }

          </span>
          <button
            type="button"
            data-testid="finish-recipe-btn"
            disabled={ disablebtnFinishRecipe }
            onClick={ () => handleFinishRecipe(recipeInProgress[0]) }
          >
            Finish Recipe
          </button>
        </div>
      </section>
    )
  );
}

RecipeInProgress.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  match: PropTypes
    .shape({ params: PropTypes.shape({ id: PropTypes.string }) }).isRequired,
};

export default RecipeInProgress;
