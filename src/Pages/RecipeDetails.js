import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchApi } from '../Helpers/useFetch';
import Details from '../Components/Details';
import myContext from '../Context/myContext';
import { getfavoriteFoodLocalStore } from '../Helpers/favoriteLocalStore';

function RecipeDetails({ match, history }) {
  const { setdetailRecipeInfo, detailRecipeInfo,
    setIsFavoriteBtn } = useContext(myContext);
  const [dataOfDetails, setDataOfDetails] = useState([]);
  const thisPathName = match.path;

  useEffect(() => {
    const setApiFood = async () => {
      const idFood = match.params.id;
      const endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idFood}`;
      const dataFood = await fetchApi(endpoint);
      setDataOfDetails(...dataFood.meals);
      setdetailRecipeInfo([...dataFood.meals]);
    };
    setApiFood();
  }, []);

  useEffect(() => {
    const functeste = () => {
      let teste2;
      const favoritesLocalStore = getfavoriteFoodLocalStore();
      if (detailRecipeInfo.length > 0) {
        if (detailRecipeInfo[0].idMeal) {
          teste2 = favoritesLocalStore
            .some((item) => item.id === detailRecipeInfo[0].idMeal);
        }
        setIsFavoriteBtn(teste2);
      }
    };
    functeste();
  }, [detailRecipeInfo]);

  return (
    dataOfDetails
    && (
      <Details
        dataOfDetails={ dataOfDetails }
        path={ thisPathName }
        history={ history }
      />
    )
  );
}

RecipeDetails.propTypes = {
  match: PropTypes.objectOf.isRequired,
  history: PropTypes.shape({}).isRequired,

};

export default RecipeDetails;
