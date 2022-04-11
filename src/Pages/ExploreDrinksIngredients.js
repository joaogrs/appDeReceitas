import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import myContext from '../Context/myContext';
import Header from '../Components/Header';
import { fetchApi } from '../Helpers/useFetch';

function ExploreDrinksIngredients(props) {
  const [dataDrink, setDataDrinks] = useState();
  const { setShowSearchInput,
    setFilteredByIngredient, setIngredientSelect } = useContext(myContext);
  useEffect(() => {
    // console.log('didMount');
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
      {dataDrink && dataDrink.map((objDrinkIngredient, i) => {
        const onClickLink = () => {
          setFilteredByIngredient(true);
          setIngredientSelect(objDrinkIngredient.strIngredient1);
        };
        return (
          <Link key={ i } to="/drinks" onClick={ onClickLink }>
            <section key={ i } data-testid={ `${i}-ingredient-card` }>
              <img
                alt="imagem do ingrediente"
                src={ `https://www.thecocktaildb.com/images/ingredients/${objDrinkIngredient.strIngredient1}-Small.png` }
                data-testid={ `${i}-card-img` }
              />
              <h2
                data-testid={ `${i}-card-name` }
              >
                {objDrinkIngredient.strIngredient1}

              </h2>
            </section>
          </Link>);
      })}
      <Footer />
    </section>
  );
}

export default ExploreDrinksIngredients;
