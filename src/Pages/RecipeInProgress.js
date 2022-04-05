import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import myContext from '../Context/myContext';
import { fetchApi } from '../Helpers/useFetch';
import IngredientsListInProgress from '../Components/IngredientsListInProgress';

function RecipeInProgress(props) {
  const {
    recipeInProgress,
    setRecipeInProgress,
  } = useContext(myContext);

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
  // const { history } = props;
  // const [disabled, setDisabled] = useState(true);

  // handleFinishRecipe = () => {
  //   history.push('/done-recipes');
  // };

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
          <span data-testid="recipe-category">{ recipeInProgress[0].strCategory }</span>
          <IngredientsListInProgress
            dataDetails={ recipeInProgress[0] }
          />
          <span data-testid="instructions">{ recipeInProgress[0].strInstructions }</span>
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

RecipeInProgress.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  match: PropTypes
    .shape({ params: PropTypes.shape({ id: PropTypes.string }) }).isRequired,
};

export default RecipeInProgress;

// {
//   cocktails: {
//       id-da-bebida: [lista-de-ingredientes-utilizados],
//       ...
//   },
//   meals: {
//       id-da-comida: [lista-de-ingredientes-utilizados],
//       ...
//   }
// }

// [{
//   id: id-da-receita,
//   type: comida-ou-bebida,
//   nationality: nacionalidade-da-receita-ou-texto-vazio,
//   category: categoria-da-receita-ou-texto-vazio,
//   alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
//   name: nome-da-receita,
//   image: imagem-da-receita,
//   doneDate: quando-a-receita-foi-concluida,
//   tags: array-de-tags-da-receita-ou-array-vazio
// }]
