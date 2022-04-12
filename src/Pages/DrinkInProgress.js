import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import myContext from '../Context/myContext';
import { fetchApi } from '../Helpers/useFetch';
import IngredientsListInProgress from '../Components/IngredientsListInProgress';
import ShareButtonInProgressDrinks from '../Components/ShareButtonInProgressDrinks';
import FavoriteButtonInProgressDrinks from '../Components/FavoriteButtonInProgressDrinks';
import { getfavoriteFoodLocalStore } from '../Helpers/favoriteLocalStore';
import { removeDoneRecipesLocalStorage } from '../Helpers/InProgressLocalStorage';
import { setDoneRecipesLocalStorage } from '../Helpers/setDoneRecipesLocalStorage';

function DrinkInProgress(props) {
  const { drinkInProgress, setDrinkInProgress,
    setIsFavoriteBtn, disablebtnFinishRecipe } = useContext(myContext);
  const { history } = props;

  useEffect(() => {
    const setApiFood = async () => {
      const { match } = props;
      const { params } = match;
      const { id } = params;
      const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
      const dataDrink = await fetchApi(endpoint);
      setDrinkInProgress([...dataDrink.drinks]);
    };
    setApiFood();
  }, []);

  useEffect(() => {
    const functeste = () => {
      let teste2;
      const favoritesLocalStore = getfavoriteFoodLocalStore();
      if (drinkInProgress.length > 0) {
        if (drinkInProgress[0].idDrink) {
          teste2 = favoritesLocalStore
            .some((item) => item.id === drinkInProgress[0].idDrink);
        }
        setIsFavoriteBtn(teste2);
      }
    };
    functeste();
  }, [drinkInProgress]);

  const isAlcoholicOrNot = (string) => {
    if (string === 'Optional alcohol') {
      return ('Non alcoholic');
    }
    if (string === 'Alcoholic') {
      return string;
    }
    if (string === 'Non alcoholic') {
      return string;
    }
  };

  const dateFinal = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return today.toLocaleDateString();
  };

  const handleFinishRecipe = (objectRecipe) => {
    console.log(objectRecipe);
    const {
      idDrink,
      strArea,
      strCategory,
      strDrink,
      strDrinkThumb,
      strAlcoholic } = objectRecipe;

    const objDone = {
      id: idDrink,
      type: 'drink',
      nationality: strArea || '',
      category: strCategory,
      alcoholicOrNot: isAlcoholicOrNot(strAlcoholic),
      name: strDrink,
      image: strDrinkThumb,
      doneDate: dateFinal(),
      tags: [],
    };

    setDoneRecipesLocalStorage(objDone);

    removeDoneRecipesLocalStorage(idDrink, 'cocktails');
    history.push('/done-recipes');
  };

  return (
    drinkInProgress.length > 0 && (
      <section className="details">
        <div className="containerDetails">
          <img
            width="30%"
            height="30%"
            className="img_details"
            data-testid="recipe-photo"
            alt={ drinkInProgress[0].idDrink }
            src={ drinkInProgress[0].strDrinkThumb }
          />
          <h1
            data-testid="recipe-title"
            className="title"
          >
            {drinkInProgress[0].strDrink}

          </h1>
          <div className="containerFavoriteAndShare">
            <ShareButtonInProgressDrinks />
            <FavoriteButtonInProgressDrinks />
          </div>
          <span data-testid="recipe-category">{ drinkInProgress[0].strAlcoholic }</span>
          <IngredientsListInProgress
            dataDetails={ drinkInProgress[0] }
          />
          <span
            data-testid="instructions"
            className="desc-instructions"
          >
            { drinkInProgress[0].strInstructions }

          </span>
          <button
            type="button"
            data-testid="finish-recipe-btn"
            disabled={ disablebtnFinishRecipe }
            onClick={ () => handleFinishRecipe(drinkInProgress[0]) }
          >
            Finish Recipe
          </button>
        </div>
      </section>
    )
  );
}

DrinkInProgress.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  match: PropTypes
    .shape({ params: PropTypes.shape({ id: PropTypes.string }) }).isRequired,
};

export default DrinkInProgress;
