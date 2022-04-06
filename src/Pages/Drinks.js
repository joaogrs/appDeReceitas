import React, { useEffect, useContext } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import CardDrink from '../Components/CardDrink';
import myContext from '../Context/myContext';
import { fetchApi } from '../Helpers/useFetch';
import CategoriesDrinks from '../Components/CategoriesDrinks';

function Drinks(props) {
  const { setApiData,
    setCategoriesDrinks,
    filteredByIngredient, ingredientSelectInExplore } = useContext(myContext);

  useEffect(() => {
    const setInitialApi = async () => {
      const endpointInitial = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      const endpointCategories = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const drinksInitial = await fetchApi(endpointInitial);
      const categoriesDrink = await fetchApi(endpointCategories);
      setCategoriesDrinks(categoriesDrink);
      setApiData(drinksInitial);
    };
    const setFilteredApi = async () => {
      const endpointFiltered = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientSelectInExplore}`;
      const endpointCategories = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const drinksFiltered = await fetchApi(endpointFiltered);
      const categoriesDrink = await fetchApi(endpointCategories);
      setCategoriesDrinks(categoriesDrink);
      setApiData(drinksFiltered);
    };
    if (filteredByIngredient === true) {
      setFilteredApi();
    } else setInitialApi();
  }, []);
  return (
    <section>
      <h1>Drinks</h1>
      <Header { ...props } pageTitle="Drinks" />
      <CategoriesDrinks />
      <CardDrink />
      <Footer />
    </section>
  );
}

export default Drinks;
