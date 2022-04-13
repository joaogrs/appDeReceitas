import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import myContext from '../Context/myContext';
import Header from '../Components/Header';
import { fetchApi } from '../Helpers/useFetch';
import '../styles/explore_drinks_ingredients.css';

function ExploreDrinksIngredients(props) {
  const [dataDrink, setDataDrinks] = useState();
  const { setShowSearchInput,
    setFilteredByIngredient, setIngredientSelect } = useContext(myContext);
  useEffect(() => {
    setShowSearchInput((prevState) => !prevState);
    const fetchDrinksIngredients = async () => {
      const ARRAY_LENGTH = 12;
      const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
      const data = await fetchApi(endpoint);
      const firstDrinks = [];
      for (let i = 0; i < ARRAY_LENGTH; i += 1) {
        firstDrinks.push(data.drinks[i]);
      }
      setDataDrinks(firstDrinks);
    };
    fetchDrinksIngredients();
  }, []);

  return (
    <section>
      <Header { ...props } pageTitle="Explore Ingredients" />
      <div className="card-ingredients">
        {dataDrink && dataDrink.map((objDrinkIngredient, i) => {
          const onClickLink = () => {
            setFilteredByIngredient(true);
            setIngredientSelect(objDrinkIngredient.strIngredient1);
          };
          return (
            <Link key={ i } to="/drinks" onClick={ onClickLink }>
              <section
                key={ i }
                data-testid={ `${i}-ingredient-card` }
                className="ingredients"
              >
                <img
                  alt="imagem do ingrediente"
                  src={ `https://www.thecocktaildb.com/images/ingredients/${objDrinkIngredient.strIngredient1}-Small.png` }
                  data-testid={ `${i}-card-img` }
                />
                <h4
                  data-testid={ `${i}-card-name` }
                >
                  {objDrinkIngredient.strIngredient1}

                </h4>
              </section>
            </Link>);
        })}
      </div>
      <Footer />
    </section>
  );
}

export default ExploreDrinksIngredients;
