import React, { useEffect, useContext } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import CardDrink from '../Components/CardDrink';
import myContext from '../Context/myContext';
import { fetchApi } from '../Helpers/useFetch';

function Drinks(props) {
  const { setApiData } = useContext(myContext);
  useEffect(() => {
    (async () => {
      const endpointInitial = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      const drinksInitial = await fetchApi(endpointInitial);
      console.log(drinksInitial);
      setApiData(drinksInitial);
    })();
  }, []);
  return (
    <section>
      <h1>Drinks</h1>
      <Header { ...props } pageTitle="Drinks" />
      <CardDrink />
      <Footer />
    </section>
  );
}

export default Drinks;
