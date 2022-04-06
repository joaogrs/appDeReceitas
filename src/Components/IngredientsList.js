import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function IngredientsList({ dataDetails }) {
  const [arrayIngredientsAndQuantities, setArrayIngredientsAndQuantities] = useState([]);

  const createIngredientAndQuantity = () => {
    const ingredientsKeys = Object.keys(dataDetails)
      .filter((ingredient) => ingredient.includes('strIngredient'))
      .filter((ingredient) => (dataDetails[ingredient] !== ''))
      .filter((ingredient) => (dataDetails[ingredient] !== null));

    const quantitiesKeys = Object.keys(dataDetails)
      .filter((quantity) => quantity.includes('strMeasure'))
      .filter((quantity) => dataDetails[quantity] !== ' ');

    const quantities = quantitiesKeys.map((quantityKey) => dataDetails[quantityKey]);

    ingredientsKeys.forEach((ingredient, index) => {
      const ingredientName = dataDetails[ingredient];
      const quantityIngredient = quantities[index];
      const strIngredientAndQuantity = `-${ingredientName}-${quantityIngredient}`;
      setArrayIngredientsAndQuantities((prev) => ([...prev, strIngredientAndQuantity]));
    });
  };

  useEffect(() => createIngredientAndQuantity(), [dataDetails]);

  return (
    arrayIngredientsAndQuantities.length > 0 && (
      <section>
        <h1>Ingredients</h1>
        {arrayIngredientsAndQuantities
          .map((stringIngredientsAndQuantity, i) => (
            <p
              data-testid={ `${i}-ingredient-name-and-measure` }
              key={ i }
            >
              {stringIngredientsAndQuantity}

            </p>
          ))}
      </section>
    )
  );
}

IngredientsList.propTypes = {
  dataDetails: PropTypes.shape({}).isRequired,
};

export default IngredientsList;
