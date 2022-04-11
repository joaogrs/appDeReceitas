import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../Context/myContext';
import '../styles/card_meals.css';

function CardMeal() {
  const { apiData } = useContext(myContext);

  const [dataValue, setDataValue] = useState([]);
  const [verifyDataValue, setVerifyDataValue] = useState(false);

  const verifyData = () => {
    const maxLength = 11;
    if (apiData.meals) {
      if (apiData.meals.length > maxLength) {
        const newArr = [];
        for (let i = 0; i <= maxLength; i += 1) {
          newArr[i] = apiData.meals[i];
        }
        setDataValue([...newArr]);
      } else { setDataValue([...apiData.meals]); }
      setVerifyDataValue(true);
    } else setVerifyDataValue(false);
  };

  useEffect(() => { verifyData(); }, [apiData]);

  return (
    <section className="card_meals">
      {verifyDataValue ? dataValue.map(({ strMeal, strMealThumb, idMeal }, index) => (
        <Link key={ index } to={ `/foods/${idMeal}` }>
          <div
            className="item_card"
            data-testid={ `${index}-recipe-card` }
          >
            <div>
              <img
                data-testid={ `${index}-card-img` }
                alt={ strMeal }
                src={ strMealThumb }
              />
            </div>
            <span data-testid={ `${index}-card-name` }>{strMeal}</span>
          </div>
        </Link>
      )) : null }
    </section>
  );
}

export default CardMeal;
