import React, { useState, useContext } from 'react';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import myContext from '../Context/myContext';

const ShareButtonInProgressDrinks = () => {
  const [btnShareshow, setBtnShareShow] = useState(true);
  const { drinkInProgress } = useContext(myContext);
  const TWO_SECONDS = 2000;
  const clickShareRecipe = async (object) => {
    if (Object.keys(object[0])[0] === 'idDrink') {
      await copy(`http://localhost:3000/drinks/${object[0].idDrink}`);
      setBtnShareShow(false);
      setTimeout(() => {
        setBtnShareShow(true);
      }, TWO_SECONDS);
    }
  };
  return (
    <div>
      {btnShareshow ? (
        <input
          type="image"
          onClick={ () => { clickShareRecipe(drinkInProgress); } }
          data-testid="share-btn"
          src={ shareIcon }
          alt="compartilhar"
        />) : (<button type="button">Link copied!</button>
      )}
    </div>
  );
};

export default ShareButtonInProgressDrinks;
