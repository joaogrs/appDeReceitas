import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import myContext from '../Context/myContext';
import { fetchApi } from '../Helpers/useFetch';
import IngredientsListInProgress from '../Components/IngredientsListInProgress';

function DrinkInProgress(props) {
  const { drinkInProgress, setDrinkInProgress } = useContext(myContext);

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
  // const { history } = props;
  // const [value, setValue] = useLocalStorage('inProgressRecipes', '');
  // const [disabled, setDisabled] = useState(true);

  // handleFinishRecipe = () => {
  //   history.push('/done-recipes');
  // };

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
          <button
            type="button"
            data-testid="share-btn"
          >
            Compartilhar
          </button>
          <button
            type="button"
            data-testid="favorite-btn"
          >
            Favoritar
          </button>
          <span data-testid="recipe-category">{ drinkInProgress[0].strAlcoholic }</span>
          <IngredientsListInProgress
            dataDetails={ drinkInProgress[0] }
          />
          <span data-testid="instructions">{ drinkInProgress[0].strInstructions }</span>
          <button
            type="button"
            data-testid="finish-recipe-btn"
            // disabled={ disabled }
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
