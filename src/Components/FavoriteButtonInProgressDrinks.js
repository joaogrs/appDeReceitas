import React, { useContext } from 'react';
import myContext from '../Context/myContext';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { favoriteFoodLocalStore,
  getfavoriteFoodLocalStore,
  newFavoriteFoodLocalStore } from '../Helpers/favoriteLocalStore';

const FavoriteButtonInProgressDrinks = () => {
  // const [isFavoriteBtn, setIsFavoriteBtn] = useState(false);
  const { drinkInProgress, isFavoriteBtn, setIsFavoriteBtn } = useContext(myContext);
  const detailRecipeInfoGlobal = drinkInProgress[0];
  const isAlcoholicOrNot = (string) => {
    if (string === 'Optional alcohol') {
      return ('Non alcoholic');
    }
    if (string === 'Alcoholic') {
      return string;
    }
    if (string === 'Non alcoholic') {
      return string;
    }
  };
  const defineObjectFavorite = (obj) => {
    if (Object.keys(obj)[0] === 'idMeal') {
      const { idMeal, strArea, strCategory, strMeal, strMealThumb } = obj;
      const favorite = {
        id: idMeal,
        type: 'food',
        nationality: strArea,
        category: strCategory,
        alcoholicOrNot: '',
        name: strMeal,
        image: strMealThumb,
      };
      favoriteFoodLocalStore(favorite);
    }
    if (Object.keys(obj)[0] === 'idDrink') {
      const { idDrink, strArea, strCategory, strDrink,
        strDrinkThumb, strAlcoholic } = obj;
      const favorite = {
        id: idDrink,
        type: 'drink',
        nationality: strArea || '',
        category: strCategory,
        alcoholicOrNot: isAlcoholicOrNot(strAlcoholic),
        name: strDrink,
        image: strDrinkThumb,
      };
      favoriteFoodLocalStore(favorite);
    }
  };
  const clickFavoriteRecipe = (objectDetail) => {
    console.log('Clicou Favoritar');
    console.log(objectDetail);
    defineObjectFavorite(objectDetail);
    setIsFavoriteBtn((prevState) => (!prevState));
  };

  const verifyLocalStoreFoodOrDrink = (favoriteLocalStore, currentId) => {
    console.log('estão no local Store', favoriteLocalStore);
    const favoriteLocalStoreFilter = favoriteLocalStore
      .filter((item) => item.id !== currentId);
    console.log('Novas favorites', favoriteLocalStoreFilter);
    newFavoriteFoodLocalStore(favoriteLocalStoreFilter);
  };

  const clickNotFavoriteRecipe = (objectDetail) => {
    console.log('clicou Desfavoritar');
    console.log(objectDetail);
    let currentId;
    if (objectDetail.idMeal) {
      currentId = objectDetail.idMeal;
    } else {
      currentId = objectDetail.idDrink;
    }
    const favoriteLocalStore = getfavoriteFoodLocalStore();
    verifyLocalStoreFoodOrDrink(favoriteLocalStore, currentId);
    setIsFavoriteBtn((prevState) => (!prevState));
  };

  // useEffect(() => {
  //   const functeste = () => {
  //     let teste2;
  //     const favoritesLocalStore = getfavoriteFoodLocalStore();
  //     console.log('local storage', favoritesLocalStore);
  //     if (detailRecipeInfo[0].idDrink) {
  //       teste2 = favoritesLocalStore
  //         .some((item) => item.id === detailRecipeInfo[0].idDrink);
  //       // setIsFavoriteBtn((prevState) => (!prevState));
  //     } else if (detailRecipeInfo[0].idMeal) {
  //       teste2 = favoritesLocalStore
  //         .some((item) => item.id === detailRecipeInfo[0].idMeal);
  //       // setIsFavoriteBtn((prevState) => (!prevState));
  //     }
  //     setIsFavoriteBtn(teste2);
  //   };
  //   functeste();
  //   console.log('didimount', detailRecipeInfo);
  // }, [detailRecipeInfo]);

  return (
    <div>
      {isFavoriteBtn ? (
        <input
          type="image"
          data-testid="favorite-btn"
          alt="favoritar"
          src={ blackHeartIcon }
          onClick={ () => { clickNotFavoriteRecipe(detailRecipeInfoGlobal); } }
        />) : (
        (
          <input
            type="image"
            data-testid="favorite-btn"
            alt="favoritar"
            src={ whiteHeartIcon }
            onClick={ () => { clickFavoriteRecipe(detailRecipeInfoGlobal); } }
          />))}
    </div>
  );
};
export default FavoriteButtonInProgressDrinks;
