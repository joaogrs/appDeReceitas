import React from 'react';
// import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
// import getfromLocalStorage from '../Helpers/getFromLocalStorage';
// import myContext from '../Context/myContext';

const CardDoneRecipes = () => {
  // const { setDoneRecipes,
  // doneRecipesFilter, setDoneRecipesFilter } = useContext(myContext);
  // id: 'id-da-receita',
  // type: 'comida-ou-bebida',
  // nationality: 'nacionalidade-da-receita-ou-texto-vazio',
  // category: 'categoria-da-receita-ou-texto-vazio',
  // alcoholicOrNot: 'alcoholic-ou-non-alcoholic-ou-texto-vazio',
  // name: 'nome-da-receita',
  // image: 'imagem-da-receita',
  // doneDate: 'quando-a-receita-foi-concluida',
  // tags: ['array-de-tags-da-receita-ou-array-vazio'],
  const copyLinkRecipe = async (id, type) => {
    // console.log('click copied');
    await copy(`http://localhost:3000/${type}/${id}`);
    global.alert('Link de detalhes copiado');
  };
  useEffect(() => {
    // console.log('didMount');
    // const doneRecipesLocalStorage = (getfromLocalStorage('doneRecipes'));
    // console.log(doneRecipesLocalStorage);
    // setDoneRecipes([doneRecipesLocalStorage]);
    // setDoneRecipesFilter([doneRecipesLocalStorage]);
  }, []);

  return (
    <div>
      {doneRecipesFilter && doneRecipesFilter
        .map(({ id, type, name, image, category, nationality,
          doneDate, tags, alcoholicOrNot }, index) => (
          (
            <div key={ index }>
              <Link to={ `/${type}/${id}` }>
                <img
                  data-testid={ `${index}-horizontal-image` }
                  src={ image }
                  alt={ name }
                />
              </Link>
              {alcoholicOrNot === 'alcoholic' ? (
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  Alcoholic
                </p>) : (
                (
                  <p
                    data-testid={ `${index}-horizontal-top-text` }
                  >
                    { `${category}-${nationality}` }
                  </p>))}
              <Link to={ `/${type}/${id}` }>
                <h2 data-testid={ `${index}-horizontal-name` }>{ name }</h2>
              </Link>
              <p data-testid={ `${index}-horizontal-done-date` }>{doneDate}</p>
              <input
                data-testid={ `${index}-horizontal-share-btn` }
                type="image"
                alt={ name }
                src={ shareIcon }
                onClick={ () => { copyLinkRecipe(id, type); } }
              />
              {tags.map((tag, indexTwo) => (
                <p
                  key={ tag }
                  data-testid={ `${indexTwo}-${tag}-horizontal-tag` }
                >
                  {tag}
                </p>
              ))}
            </div>
          )))}
    </div>
  );
};

export default CardDoneRecipes;
