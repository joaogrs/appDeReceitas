import React, { useEffect, useContext } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import CardMeal from '../Components/CardMeal';
import { fetchApi } from '../Helpers/useFetch';
import myContext from '../Context/myContext';

function Foods(props) {
  const { setApiData } = useContext(myContext);
  useEffect(() => {
    (async () => {
      const endpointInitial = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const foodsInitial = await fetchApi(endpointInitial);
      console.log(foodsInitial);
      setApiData(foodsInitial);
    })();
  }, []);
  return (
    <section>
      <h1>Foods</h1>
      <Header { ...props } pageTitle="Foods" />
      <CardMeal />
      <Footer />
    </section>
  );
}

export default Foods;
