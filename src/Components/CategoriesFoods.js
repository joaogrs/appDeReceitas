import React, { useContext, useEffect, useState } from 'react';
import myContext from '../Context/myContext';
import { fetchApi } from '../Helpers/useFetch';

const CategoriesFoods = () => {
  const { categoriesFoods, setApiData } = useContext(myContext);
  const [cardCategories, setCardCategories] = useState([]);
  const [filterClickMeal, setFilterClickMeal] = useState(false);
  const [lastMealCategoryName, setMealLastCategoryName] = useState('');
  const defineFiveCategories = () => {
    const maxLength = 4;
    if (categoriesFoods.meals) {
      const newArrCategories = [];
      for (let i = 0; i <= maxLength; i += 1) {
        newArrCategories[i] = categoriesFoods.meals[i];
      }
      setCardCategories([...newArrCategories]);
    }
  };

  const handleClickCategorieMeals = async ({ strCategory }) => {
    if (filterClickMeal === false) {
      const urlCategory = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`;
      const response = await fetchApi(urlCategory);
      setApiData(response);
      setFilterClickMeal(true);
      setMealLastCategoryName(strCategory);
    }
    if (filterClickMeal && strCategory === lastMealCategoryName) {
      const urlInitial = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const foodsInitial = await fetchApi(urlInitial);
      setApiData(foodsInitial);
      setFilterClickMeal(true);
      setMealLastCategoryName('');
    }
    if (filterClickMeal && strCategory !== lastMealCategoryName) {
      const urlCategory = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`;
      const response = await fetchApi(urlCategory);
      setApiData(response);
      setFilterClickMeal(true);
      setMealLastCategoryName(strCategory);
    }
  };

  const handleClickAllCategoriesMeals = async () => {
    const urlInitial = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const foodsInitial = await fetchApi(urlInitial);
    setApiData(foodsInitial);
  };

  useEffect(() => { defineFiveCategories(); }, [categoriesFoods]);
  return (
    <div>
      <h2>Categories</h2>
      { cardCategories && cardCategories.map((element, index) => (
        <button
          key={ index }
          data-testid={ `${element.strCategory}-category-filter` }
          type="button"
          onClick={ () => handleClickCategorieMeals(element) }
        >
          { element.strCategory }
        </button>
      ))}
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => handleClickAllCategoriesMeals() }
      >
        All
      </button>
    </div>);
};

export default CategoriesFoods;
