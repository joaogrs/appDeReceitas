import React, { useState, useContext } from 'react';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import myContext from '../Context/myContext';

const ShareButtonDetailsRecipes = () => {
  const [btnShareshow, setBtnShareShow] = useState(true);
  const { detailRecipeInfo } = useContext(myContext);
  const TWO_SECONDS = 2000;
  const clickShareRecipe = async (object) => {
    // console.log('clicou');
    // console.log(object[0]);
    // console.log('chaves do objeto', Object.keys(object[0])[0]);
    if (Object.keys(object[0])[0] === 'idMeal') {
      // console.log('entrou no if meals');
      await copy(`http://localhost:3000/foods/${object[0].idMeal}`);
      // global.alert(LINK);
      setBtnShareShow(false);
      setTimeout(() => {
        setBtnShareShow(true);
      }, TWO_SECONDS);
    }
    if (Object.keys(object[0])[0] === 'idDrink') {
      // console.log('entrou no if drinks');
      await copy(`http://localhost:3000/drinks/${object[0].idDrink}`);
      // global.alert(LINK);
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
          onClick={ () => { clickShareRecipe(detailRecipeInfo); } }
          data-testid="share-btn"
          src={ shareIcon }
          alt="compartilhar"
        />) : (<button type="button">Link copied!</button>
      )}
    </div>
  );
};

export default ShareButtonDetailsRecipes;
