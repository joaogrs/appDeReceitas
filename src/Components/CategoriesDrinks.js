import React, { useContext, useEffect, useState } from 'react';
import myContext from '../Context/myContext';

const CategoriesDrinks = () => {
  const { categoriesDrinks } = useContext(myContext);
  const [cardCategoriesDrinks, setCardCategoriesDrinks] = useState([]);
  const defineFiveCategories = () => {
    const maxLength = 4;
    if (categoriesDrinks.drinks) {
      const newArrCategories = [];
      for (let i = 0; i <= maxLength; i += 1) {
        newArrCategories[i] = categoriesDrinks.drinks[i];
      }
      console.log('new array categories', newArrCategories);
      setCardCategoriesDrinks([...newArrCategories]);
    }
  };
  useEffect(() => { defineFiveCategories(); }, [categoriesDrinks]);
  return (
    <div>
      <h2>Categories</h2>
      { cardCategoriesDrinks && cardCategoriesDrinks.map((element, index) => (
        <button
          key={ index }
          data-testid={ `${element.strCategory}-category-filter` }
          type="button"
          onClick={ () => {} }
        >
          { element.strCategory }
        </button>
      ))}
    </div>);
};

export default CategoriesDrinks;
