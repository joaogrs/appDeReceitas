import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';
import {
  InProgressLocalStorage, getIngredients } from '../Helpers/InProgressLocalStorage';

function IngredientsListInProgress({ dataDetails }) {
  const [arrayIngredientsAndQuantities, setArrayIngredientsAndQuantities] = useState([]);
  const [arrayUsedIngredients, setArrayUsedIngredients] = useState([]);
  const location = useLocation();

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

  const route = location.pathname;
  const routeArr = route.split('/');

  const handleClickChecked = (stringIngredientsAndQuantity) => {
    console.log('elemento clicado', stringIngredientsAndQuantity);
    if (routeArr[1] === 'foods') {
      InProgressLocalStorage(stringIngredientsAndQuantity, routeArr[2], 'meals');
      setArrayUsedIngredients((prevState) => [
        ...prevState, stringIngredientsAndQuantity]);
    }
    if (routeArr[1] === 'drinks') {
      InProgressLocalStorage(stringIngredientsAndQuantity, routeArr[2], 'cocktails');
      setArrayUsedIngredients((prevState) => [
        ...prevState, stringIngredientsAndQuantity]);
    }
  };

  useEffect(() => {
    const usedIngredients = getIngredients(routeArr[1], routeArr[2]);
    setArrayUsedIngredients(usedIngredients);
  }, []);

  return (
    arrayIngredientsAndQuantities.length > 0 && (
      <section>
        <h1>Ingredients</h1>
        {arrayIngredientsAndQuantities
          .map((stringIngredientsAndQuantity, i) => (
            <div key={ i }>
              <label
                htmlFor={ `${i}-ingredient-step` }
                data-testid={ `${i}-ingredient-step` }
              >
                <input
                  type="checkbox"
                  id={ `${i}-ingredient-step` }
                  name={ stringIngredientsAndQuantity }
                  className="input-id"
                  checked={
                    arrayUsedIngredients
                      .some((iten) => iten === stringIngredientsAndQuantity)
                  }
                  onClick={ () => handleClickChecked(stringIngredientsAndQuantity) }
                />
                <span className="label-checkbox">{stringIngredientsAndQuantity}</span>
              </label>
            </div>
          ))}
      </section>
    )
  );
}

IngredientsListInProgress.propTypes = {
  dataDetails: PropTypes.shape({}).isRequired,
};

export default IngredientsListInProgress;
