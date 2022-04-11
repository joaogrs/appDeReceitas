import React, { useEffect, useContext } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import CategoriesFoods from '../Components/CategoriesFoods';
import CardMeal from '../Components/CardMeal';
import { fetchApi } from '../Helpers/useFetch';
import myContext from '../Context/myContext';
import '../styles/foods.css';

function Foods(props) {
  const { setApiData,
    setCategoriesFoods,
    filteredByIngredient,
    ingredientSelectInExplore } = useContext(myContext);

  useEffect(() => {
    const setInitialApi = async () => {
      const endpointInitial = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const endpointCategories = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
      const foodsInitial = await fetchApi(endpointInitial);
      const categoriesFood = await fetchApi(endpointCategories);
      setCategoriesFoods(categoriesFood);
      setApiData(foodsInitial);
    };
    const setFilteredApi = async () => {
      const endpointFiltered = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientSelectInExplore}`;
      const endpointCategories = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
      const foodsFiltered = await fetchApi(endpointFiltered);
      const categoriesFood = await fetchApi(endpointCategories);
      setCategoriesFoods(categoriesFood);
      setApiData(foodsFiltered);
    };
    if (filteredByIngredient === true) {
      setFilteredApi();
    } else setInitialApi();
  }, []);
  return (
    <section className="container_foods">
      <Header { ...props } pageTitle="Foods" />
      <CategoriesFoods />
      <CardMeal />
      <Footer />
    </section>
  );
}

export default Foods;
