import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchApi } from '../Helpers/useFetch';
import Details from '../Components/Details';
import myContext from '../Context/myContext';
import { getfavoriteFoodLocalStore } from '../Helpers/favoriteLocalStore';

function DrinkDetails({ match }) {
  const { setdetailRecipeInfo, detailRecipeInfo,
    setIsFavoriteBtn } = useContext(myContext);
  const [dataDrinkDetails, setDataDrinkDetails] = useState([]);
  const thisPathName = match.path;

  useEffect(() => {
    const setApiDrink = async () => {
      const idDrink = match.params.id;
      const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
      const dataDrink = await fetchApi(endpoint);
      setDataDrinkDetails(...dataDrink.drinks);
      setdetailRecipeInfo([...dataDrink.drinks]);
    };
    setApiDrink();
  }, []);

  useEffect(() => {
    const functeste = () => {
      let teste2;
      const favoritesLocalStore = getfavoriteFoodLocalStore();
      console.log('local storage', favoritesLocalStore);
      console.log(detailRecipeInfo);
      if (detailRecipeInfo.length > 0) {
        if (detailRecipeInfo[0].idDrink) {
          teste2 = favoritesLocalStore
            .some((item) => item.id === detailRecipeInfo[0].idDrink);
          // setIsFavoriteBtn((prevState) => (!prevState));
        } else if (detailRecipeInfo[0].idMeal) {
          teste2 = favoritesLocalStore
            .some((item) => item.id === detailRecipeInfo[0].idMeal);
          // setIsFavoriteBtn((prevState) => (!prevState));
        }
        setIsFavoriteBtn(teste2);
      }
    };
    functeste();
  }, [detailRecipeInfo]);

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
