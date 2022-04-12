import React, { useState } from 'react';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

const ShareButtonFavoriteRecipes = (info) => {
  const { index } = info;
  const [btnShareshow, setBtnShareShow] = useState(true);
  const TWO_SECONDS = 2000;
  const clickShareRecipe = async () => {
    const { id, type } = info;
    if (type === 'food') {
      await copy(`http://localhost:3000/foods/${id}`);
      setBtnShareShow(false);
      setTimeout(() => {
        setBtnShareShow(true);
      }, TWO_SECONDS);
    }
    if (type === 'drink') {
      await copy(`http://localhost:3000/drinks/${id}`);
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
