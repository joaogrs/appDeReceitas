import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from '../Components/Footer';
import myContext from '../Context/myContext';
import Header from '../Components/Header';
import { fetchApi } from '../Helpers/useFetch';

function ExploreRecipes(props) {
  const { history } = props;
  const [dataRandom, setDataRandom] = useState();

  const { setShowSearchInput } = useContext(myContext);
  useEffect(() => {
    // console.log('didMount');
    setShowSearchInput((prevState) => !prevState);

    const fetchRandom = async () => {
      const data = await fetchApi('https://www.themealdb.com/api/json/v1/1/random.php');
      setDataRandom({ ...data.meals[0] });
      console.log(data);
    };
    fetchRandom();
  }, []);

  const handlePush = (param) => {
    history.push(param);
  };

  return (
    <section>
      <h1>Explore Recipes</h1>
      <Header { ...props } pageTitle="Explore Foods" />
      <Footer />

      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => handlePush('./foods/ingredients') }
      >
        By Ingredient
      </button>

      <button
        type="button"
        data-testid="explore-by-nationality"
        onClick={ () => handlePush('./foods/nationalities') }
      >
        By Nationality
      </button>

      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => handlePush(`/foods/${dataRandom.idMeal}`) }
      >
        Surprise me!
      </button>
    </section>
  );
}

ExploreRecipes.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default ExploreRecipes;
