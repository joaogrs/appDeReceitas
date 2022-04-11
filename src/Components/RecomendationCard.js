import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchApi } from '../Helpers/useFetch';

import '../styles/recomendation-card.css';

function RecomendationCard({ path }) {
  const [dataOfRecomendation, setDataOfRecomendation] = useState();

  useEffect(() => {
    const maxLength = 6;
    const setApi = async () => {
      if (path.includes('drinks')) {
        const endpoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
        const { meals } = await fetchApi(endpoint);
        const newArr = [];
        for (let i = 0; i < maxLength; i += 1) {
          newArr[i] = meals[i];
        }
        setDataOfRecomendation([...newArr]);
      } else {
        const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
        const { drinks } = await fetchApi(endpoint);
        const newArr = [];
        for (let i = 0; i < maxLength; i += 1) {
          newArr[i] = drinks[i];
        }
        setDataOfRecomendation([...newArr]);
      }
    };
    setApi();
  }, []);
  return path.includes('foods') ? (
    <section className="main-recomendation">
      <h1 className="recomendation">
        Recomendações
      </h1>
      <div className="main-card">
        {dataOfRecomendation && dataOfRecomendation.map((cardInfo, i) => (
          <Link key={ i } to={ `/drinks/${cardInfo.idDrink}` }>
            <div key={ i } data-testid={ `${i}-recomendation-card` }>
              <img
                src={ cardInfo.strDrinkThumb }
                alt="imagem do card"
                className="img-recomendation"
              />
              <p data-testid={ `${i}-recomendation-title` }>{cardInfo.strDrink}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  ) : (
    <section className="main-recomendation">
      <h1 className="recomendation">
        Recomendações
      </h1>
      <div className="main-card">
        {dataOfRecomendation && dataOfRecomendation.map((cardInfo, i) => (
          <Link key={ i } to={ `/foods/${cardInfo.idMeal}` }>
            <div key={ i } data-testid={ `${i}-recomendation-card` } className="card">
              <p data-testid={ `${i}-recomendation-title` }>{cardInfo.strMeal}</p>
              <img
                className="img-recomendation"
                src={ cardInfo.strMealThumb }
                alt="imagem do card"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// $index-recomendation-card

RecomendationCard.propTypes = {
  path: PropTypes.string.isRequired,
};

export default RecomendationCard;
