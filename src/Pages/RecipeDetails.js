import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchApi } from '../Helpers/useFetch';
import Details from '../Components/Details';

function RecipeDetails({ match }) {
  const [dataOfDetails, setDataOfDetails] = useState([]);
  const thisPathName = match.path;

  useEffect(() => {
    const setApiFood = async () => {
      const idFood = match.params.id;
      const endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idFood}`;
      const dataFood = await fetchApi(endpoint);
      console.log(dataFood.meals);
      setDataOfDetails(...dataFood.meals);
    };
    setApiFood();
  }, []);

  return (
    dataOfDetails
    && (
      <Details dataOfDetails={ dataOfDetails } path={ thisPathName } />
    )
  );
}

RecipeDetails.propTypes = {
  match: PropTypes.objectOf.isRequired,

};

export default RecipeDetails;
