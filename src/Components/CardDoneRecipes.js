import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../Context/myContext';
import '../Favorite.css';
import ShareButtonFavoritesRecipes from './ShareButtonFavoritesRecipes';

const CardDoneRecipes = () => {
  const { doneRecipesFilter } = useContext(myContext);

  return (
    <div>
      {doneRecipesFilter && doneRecipesFilter
        .map(({ id, type, name, image, category, nationality,
          doneDate, tags, alcoholicOrNot }, index) => (
          (
            <div key={ index }>
              <Link to={ `/${type}s/${id}` }>
                <img
                  className="img-favorite"
                  data-testid={ `${index}-horizontal-image` }
                  src={ image }
                  alt={ name }
                />
              </Link>
              {alcoholicOrNot === '' ? (
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  { `${nationality} - ${category}` }
                </p>) : (
                (
                  <p
                    data-testid={ `${index}-horizontal-top-text` }
                  >
                    {alcoholicOrNot}
                  </p>
                ))}
              <Link to={ `/${type}s/${id}` }>
                <h2 data-testid={ `${index}-horizontal-name` }>{ name }</h2>
              </Link>
              <p data-testid={ `${index}-horizontal-done-date` }>{doneDate}</p>
              {tags.map((tag) => (
                <p
                  key={ tag }
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                >
                  {tag}
                </p>
              ))}
              <ShareButtonFavoritesRecipes id={ id } type={ type } index={ index } />
            </div>
          )))}
    </div>
  );
};

export default CardDoneRecipes;
