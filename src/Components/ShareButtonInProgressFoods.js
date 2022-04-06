import React, { useState, useContext } from 'react';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import myContext from '../Context/myContext';

const ShareButtonInProgressFoods = () => {
  const [btnShareshow, setBtnShareShow] = useState(true);
  const { recipeInProgress } = useContext(myContext);
  const TWO_SECONDS = 2000;
  const clickShareRecipe = async (object) => {
    if (Object.keys(object[0])[0] === 'idMeal') {
      console.log('entrou no if meals');
      await copy(`http://localhost:3000/foods/${object[0].idMeal}`);
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
          onClick={ () => { clickShareRecipe(recipeInProgress); } }
          data-testid="share-btn"
          src={ shareIcon }
          alt="compartilhar"
        />) : (<button type="button">Link copied!</button>
      )}
    </div>
  );
};

export default ShareButtonInProgressFoods;
