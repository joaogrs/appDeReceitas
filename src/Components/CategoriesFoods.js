import React, { useContext, useEffect, useState } from 'react';
import myContext from '../Context/myContext';
import { fetchApi } from '../Helpers/useFetch';

const CategoriesFoods = () => {
  const { categoriesFoods, setApiData } = useContext(myContext);
  const [cardCategories, setCardCategories] = useState([]);
  const defineFiveCategories = () => {
    const maxLength = 4;
    if (categoriesFoods.meals) {
      const newArrCategories = [];
      for (let i = 0; i <= maxLength; i += 1) {
        newArrCategories[i] = categoriesFoods.meals[i];
      }
      console.log('new array categories', newArrCategories);
      setCardCategories([...newArrCategories]);
    }
  };

  const handleClickCategorieMeals = async ({ strCategory }) => {
    const urlCategory = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`;
    const response = await fetchApi(urlCategory);
    setApiData(response);
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
    </div>);
};

export default CategoriesFoods;
