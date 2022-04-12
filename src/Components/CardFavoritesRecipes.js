import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../Context/myContext';
import '../Favorite.css';
import ButtonsFiltrarFavorites from './ButtonsFiltrarFavorites';
import FavoriteButtonFavoriteRecipes from './FavoriteButtonFavoriteRecipe';
import ShareButtonFavoritesRecipes from './ShareButtonFavoritesRecipes';
import '../styles/favorites_recipes.css';

const CardFavoritesRecipes = () => {
  const { favoritesRecipesfilter } = useContext(myContext);
  return (
    <section className="card">
      <ButtonsFiltrarFavorites />
      <div className="card_favorites">
        { favoritesRecipesfilter.length > 0 ? favoritesRecipesfilter
          .map(({ id, name, type, image, category,
            nationality, alcoholicOrNot }, index) => (
            (
              <div className="item_favorite" key={ index }>
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
                  <h4 data-testid={ `${index}-horizontal-name` }>{ name }</h4>
                </Link>
                <div className="icons">
                  <ShareButtonFavoritesRecipes id={ id } type={ type } index={ index } />
                  <FavoriteButtonFavoriteRecipes id={ id } index={ index } />
                </div>
              </div>))) : null}
      </div>
    </section>
  );
};

export default CardFavoritesRecipes;
