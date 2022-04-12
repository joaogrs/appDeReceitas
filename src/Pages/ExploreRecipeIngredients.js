import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import myContext from '../Context/myContext';
import Header from '../Components/Header';
import { fetchApi } from '../Helpers/useFetch';
import '../styles/explore_ingredients.css';

function ExploreRecipesIngredients(props) {
  const [dataIgredients, setDataIngredients] = useState();
  const { setShowSearchInput,
    setFilteredByIngredient, setIngredientSelect } = useContext(myContext);

  useEffect(() => {
    setShowSearchInput((prevState) => !prevState);
    const fetchIngredients = async () => {
      const ARRAY_LENGTH = 12;
      const endpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
      const data = await fetchApi(endpoint);
      const firstIngredients = [];
      for (let i = 0; i < ARRAY_LENGTH; i += 1) {
        firstIngredients.push(data.meals[i]);
      }
      setDataIngredients(firstIngredients);
    };
    fetchIngredients();
  }, []);

  return (
    <section>
      <Header { ...props } pageTitle="Explore Ingredients" />
      <div className="card-ingredients">
        {dataIgredients && dataIgredients.map((objIgredient, i) => {
          const onClickLink = () => {
            setFilteredByIngredient(true);
            setIngredientSelect(objIgredient.strIngredient);
          };
          return (
            <Link key={ i } to="/foods" onClick={ onClickLink }>
              <section data-testid={ `${i}-ingredient-card` } className="ingredients">
                <img
                  alt="imagem do ingrediente"
                  src={ `https://www.themealdb.com/images/ingredients/${objIgredient.strIngredient}-Small.png` }
                  data-testid={ `${i}-card-img` }
                />
                <span data-testid={ `${i}-card-name` }>{objIgredient.strIngredient}</span>
              </section>
            </Link>);
        })}
      </div>
      <Footer />
    </section>
  );
}

// https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png thecocktaildb
export default ExploreRecipesIngredients;
