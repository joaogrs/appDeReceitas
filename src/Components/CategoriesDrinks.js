import React, { useContext, useEffect, useState } from 'react';
import myContext from '../Context/myContext';
import { fetchApi } from '../Helpers/useFetch';

const CategoriesDrinks = () => {
  const { categoriesDrinks, setApiData } = useContext(myContext);
  const [cardCategoriesDrinks, setCardCategoriesDrinks] = useState([]);
  const [filterClickDrink, setFilterClickDrink] = useState(false);
  const [lastDrinkCategoryName, setLastDrinkCategoryName] = useState('');
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

  const handleClickCategorieDrinks = async ({ strCategory }) => {
    if (filterClickDrink === false) {
      const urlCategory = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${strCategory}`;
      const response = await fetchApi(urlCategory);
      setApiData(response);
      setFilterClickDrink(true);
      setLastDrinkCategoryName(strCategory);
    }
    if (filterClickDrink && strCategory === lastDrinkCategoryName) {
      const urlInitial = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      const foodsInitial = await fetchApi(urlInitial);
      setApiData(foodsInitial);
      setFilterClickDrink(true);
      setLastDrinkCategoryName('');
    }
    if (filterClickDrink && strCategory !== lastDrinkCategoryName) {
      const urlCategory = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${strCategory}`;
      const response = await fetchApi(urlCategory);
      setApiData(response);
      setFilterClickDrink(true);
      setLastDrinkCategoryName(strCategory);
    }
  };

  const handleClickAllCategoriesDrinks = async () => {
    const urlInitial = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const drinksInitial = await fetchApi(urlInitial);
    setApiData(drinksInitial);
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
          onClick={ () => handleClickCategorieDrinks(element) }
        >
          { element.strCategory }
        </button>
      ))}
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => handleClickAllCategoriesDrinks() }
      >
        All
      </button>
    </div>);
};

export default CategoriesDrinks;
