import React, { useContext, useState, useEffect } from 'react';
import myContext from '../Context/myContext';

function CardDrink() {
  const { apiData } = useContext(myContext);

  const [dataValue, setDataValue] = useState([]);
  const [verifyDataValue, setVerifyDataValue] = useState(false);

  const verifyData = () => {
    const maxLength = 11;
    if (apiData.drinks) {
      if (apiData.drinks.length > maxLength) {
        const newArr = [];
        for (let i = 0; i <= maxLength; i += 1) {
          newArr[i] = apiData.drinks[i];
        }
        setDataValue([...newArr]);
      } else { setDataValue([...apiData.drinks]); }
      setVerifyDataValue(true);
    } else setVerifyDataValue(false);
  };
  useEffect(() => { verifyData(); }, [apiData]);

  return (
    <section>
      {verifyDataValue ? dataValue.map(({ strDrink, strDrinkThumb }, index) => (
        <div
          key={ index }
          data-testid={ `${index}-recipe-card` }
        >
          <div>
            <img
              data-testid={ `${index}-card-img` }
              alt={ strDrink }
              src={ strDrinkThumb }
            />
          </div>
          <span data-testid={ `${index}-card-name` }>{strDrink}</span>
        </div>
      )) : null }
    </section>
  );
}

export default CardDrink;
