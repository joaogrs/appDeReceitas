import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import myContext from '../Context/myContext';
import { fetchApi } from '../Helpers/useFetch';
import IngredientsListInProgress from '../Components/IngredientsListInProgress';
import ShareButtonInProgressFoods from '../Components/ShareButtonInProgressFoods';
import FavoriteButtonInProgressFoods from '../Components/FavoriteButtonInProgressFoods';
import { getfavoriteFoodLocalStore } from '../Helpers/favoriteLocalStore';
import { removeDoneRecipesLocalStorage } from '../Helpers/InProgressLocalStorage';

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

  const handleFinishRecipe = (objectRecipe) => {
    const { idMeal } = objectRecipe;
    removeDoneRecipesLocalStorage(idMeal, 'meals');
    history.push('/done-recipes');
  };

  return (
    recipeInProgress.length > 0 && (
      <section>
        <div>
          <img
            width="30%"
            height="30%"
            data-testid="recipe-photo"
            alt={ recipeInProgress[0].idMeal }
            src={ recipeInProgress[0].strMealThumb }
          />
          <h1 data-testid="recipe-title">{recipeInProgress[0].strMeal}</h1>
          <ShareButtonInProgressFoods />
          <FavoriteButtonInProgressFoods />
          <span data-testid="recipe-category">{ recipeInProgress[0].strCategory }</span>
          <IngredientsListInProgress
            dataDetails={ recipeInProgress[0] }
          />
          <span data-testid="instructions">{ recipeInProgress[0].strInstructions }</span>
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
