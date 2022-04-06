import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

const ShareButtonFavoriteRecipes = (info) => {
  const { index } = info;
  const [btnShareshow, setBtnShareShow] = useState(true);
  const TWO_SECONDS = 2000;
  const clickShareRecipe = async () => {
    // console.log('clicou btn favorite Recipes');
    // console.log('info', info);
    const { id, type } = info;
    if (type === 'food') {
      // console.log('entrou no if meals');
      await copy(`http://localhost:3000/foods/${id}`);
      // global.alert(LINK);
      setBtnShareShow(false);
      setTimeout(() => {
        setBtnShareShow(true);
      }, TWO_SECONDS);
    }
    if (type === 'drink') {
      // console.log('entrou no if drinks');
      await copy(`http://localhost:3000/drinks/${id}`);
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
          onClick={ () => { clickShareRecipe(); } }
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt="compartilhar"
        />) : (<button type="button">Link copied!</button>
      )}
    </div>
  );
};

export default ShareButtonFavoriteRecipes;
