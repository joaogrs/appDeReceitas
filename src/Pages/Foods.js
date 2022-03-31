import React, { useEffect, useContext } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import CategoriesFoods from '../Components/CategoriesFoods';
import CardMeal from '../Components/CardMeal';
import { fetchApi } from '../Helpers/useFetch';
import myContext from '../Context/myContext';

function Foods(props) {
  const { setApiData, setCategoriesFoods } = useContext(myContext);
  useEffect(() => {
    (async () => {
      const endpointInitial = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const endpointCategories = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
      const foodsInitial = await fetchApi(endpointInitial);
      const categoriesFood = await fetchApi(endpointCategories);
      setCategoriesFoods(categoriesFood);
      setApiData(foodsInitial);
    })();
  }, []);
  return (
    <section>
      <h1>Foods</h1>
      <Header { ...props } pageTitle="Foods" />
      <CategoriesFoods />
      <CardMeal />
      <Footer />
    </section>
  );
}

export default Foods;
