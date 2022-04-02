import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import useLocalStorage from '../Helpers/useLocalStorage';

function RecipeInProgress(props) {
  const { history } = props;
  const [checkedIngredient, setCheckedIngredient] = useState(false);
  // const [value, setValue] = useLocalStorage('inProgressRecipes', '');
  const [disabled, setDisabled] = useState(true);

  handleCheckIngredient = (event) => {
    if (event.checked === false) {
      event.target.classList.add('completed');
      setCheckedIngredient(true);
    }
    if (event.checked === true) {
      event.target.classList.remove('completed');
      setCheckedIngredient(false);
    }
  };

  handleFinishRecipe = () => {
    history.push('/done-recipes');
  };

  return (
    <section>
      <div>
        <img data-testid="recipe-photo" alt="" />
        <h2 data-testid="recipe-title">1</h2>
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
        <span data-testid="recipe-category">1</span>
        {algumacoisa.map((ingredient, index) => (
          <div key={ `${index}` }>
            <label
              data-testid={ `${index}-ingredient-step` }
              htmlFor={ ingredient.name }
            >
              {ingredient.name}
            </label>
            <input
              type="checkbox"
              id={ ingredient.name }
              name={ ingredient.name }
              checked={ checkedIngredient }
              onClick={ (event) => handleCheckIngredient(event) }
            />
          </div>
        ))}
        <span data-testid="instructions">1</span>
        <button
          type="button"
          data-testid="finish-recipe-btn"
          disabled={ disabled }
          onClick={ () => handleFinishRecipe() }
        >
          Finish Recipe
        </button>
      </div>
    </section>
  );
}

RecipeInProgress.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
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
