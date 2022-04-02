import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchApi } from '../Helpers/useFetch';
import Details from '../Components/Details';

function DrinkDetails({ match }) {
  const [dataDrinkDetails, setDataDrinkDetails] = useState([]);
  const thisPathName = match.path;

  useEffect(() => {
    const setApiDrink = async () => {
      const idDrink = match.params.id;
      const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
      const dataDrink = await fetchApi(endpoint);
      setDataDrinkDetails(...dataDrink.drinks);
    };
    setApiDrink();
  }, []);

  return (
    dataDrinkDetails
    && (
      <Details dataOfDetails={ dataDrinkDetails } path={ thisPathName } />
    )
  );
}

DrinkDetails.propTypes = {
  match: PropTypes.objectOf.isRequired,

};

export default DrinkDetails;
