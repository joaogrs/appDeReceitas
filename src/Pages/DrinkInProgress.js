import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import myContext from '../Context/myContext';
import { fetchApi } from '../Helpers/useFetch';
import IngredientsListInProgress from '../Components/IngredientsListInProgress';
import ShareButtonInProgressDrinks from '../Components/ShareButtonInProgressDrinks';
import FavoriteButtonInProgressDrinks from '../Components/FavoriteButtonInProgressDrinks';
import { getfavoriteFoodLocalStore } from '../Helpers/favoriteLocalStore';

function DrinkInProgress(props) {
  const { drinkInProgress, setDrinkInProgress,
    setIsFavoriteBtn, disablebtnFinishRecipe } = useContext(myContext);
  // const [disabled, setDisabled] = useState(true);
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
  const handleFinishRecipe = () => {
    history.push('/done-recipes');
  };

  return (
    drinkInProgress.length > 0 && (
      <section>
        <div>
          <img
            width="30%"
            height="30%"
            data-testid="recipe-photo"
            alt={ drinkInProgress[0].idDrink }
            src={ drinkInProgress[0].strDrinkThumb }
          />
          <h1 data-testid="recipe-title">{drinkInProgress[0].strDrink}</h1>
          <ShareButtonInProgressDrinks />
          <FavoriteButtonInProgressDrinks />
          <span data-testid="recipe-category">{ drinkInProgress[0].strAlcoholic }</span>
          <IngredientsListInProgress
            dataDetails={ drinkInProgress[0] }
          />
          <span data-testid="instructions">{ drinkInProgress[0].strInstructions }</span>
          <button
            type="button"
            data-testid="finish-recipe-btn"
            disabled={ disablebtnFinishRecipe }
            onClick={ () => handleFinishRecipe() }
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
