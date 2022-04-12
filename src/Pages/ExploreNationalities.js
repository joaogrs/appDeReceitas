import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { fetchApi } from '../Helpers/useFetch';
import '../styles/explore_nationalities.css';

function ExploreNationalities(props) {
  const [dataNationality, setDataNationality] = useState();
  const [recipesNationalities, setRecipesNationalities] = useState();
  const [allrecipes, setAllRecipes] = useState();

  const fetchAllRecipes = async () => {
    const ARRAY_LENGTH = 12;
    const endpoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const dataFetchAll = await fetchApi(endpoint);
    const allRecipes = [];
    for (let i = 0; i < ARRAY_LENGTH; i += 1) {
      allRecipes.push(dataFetchAll.meals[i]);
    }
    setRecipesNationalities(undefined);
    setAllRecipes(allRecipes);
  };

  useEffect(() => {
    const fetchNationalities = async () => {
      const endpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
      const data = await fetchApi(endpoint);
      console.log(data);
      setDataNationality([...data.meals]);
    };
    fetchNationalities();
    fetchAllRecipes();
  }, []);

  const handleClick = async ({ target: { value } }) => {
    const ARRAY_LENGTH = 12;
    if (value === 'All') {
      fetchAllRecipes();
    } else {
      const endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${value}`;
      const dataFetch = await fetchApi(endpoint);
      console.log(dataFetch);
      const firstRecipes = [];
      for (let i = 0; i < ARRAY_LENGTH; i += 1) {
        firstRecipes.push(dataFetch.meals[i]);
      }
      const firstRecipesFiltered = firstRecipes.filter((recipe) => recipe !== undefined);
      setRecipesNationalities(firstRecipesFiltered);
      setAllRecipes(undefined);
    }
  };

  return (
    <section className="explore_nationalities">
      <Header { ...props } pageTitle="Explore Nationalities" />

      <div className="nationaly">
        <label htmlFor="explore-nationality-dropdown">
          <select
            id="explore-nationality-dropdown"
            data-testid="explore-by-nationality-dropdown"
            onClick={ handleClick }
          >
            <option
              value="All"
              data-testid="All-option"
              defaultValue
            >
              All
            </option>

            { dataNationality && dataNationality.map((area) => (
              <option
                key={ area.strArea }
                value={ area.strArea }
                data-testid={ `${area.strArea}-option` }
                defaultValue
              >
                {area.strArea}
              </option>))}
          </select>
        </label>
      </div>

      <div className="card_nationality">
        {recipesNationalities && recipesNationalities.map((recipe, index) => (
          <Link key={ recipe.strMeal } to={ `/foods/${recipe.idMeal}` }>
            <section
              className="item_card"
              key={ recipe.strMeal }
              data-testid={ `${index}-recipe-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                alt={ recipe.strMeal }
                src={ recipe.strMealThumb }
              />
              <span data-testid={ `${index}-card-name` }>{recipe.strMeal}</span>
            </section>
          </Link>
        ))}

        {allrecipes && allrecipes.map((recipe, index) => (
          <Link key={ recipe.strMeal } to={ `/foods/${recipe.idMeal}` }>
            <section
              className="item_card"
              key={ recipe.strMeal }
              data-testid={ `${index}-recipe-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                alt={ recipe.strMeal }
                src={ recipe.strMealThumb }
              />
              <p data-testid={ `${index}-card-name` }>{recipe.strMeal}</p>
            </section>
          </Link>
        ))}
      </div>

      <Footer />
    </section>
  );
}

export default ExploreNationalities;
