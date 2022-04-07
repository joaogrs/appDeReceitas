import React, { useContext, useEffect } from 'react';
import myContext from '../Context/myContext';
import Header from '../Components/Header';
import ButtonsDoneRecipes from '../Components/ButtonsDoneRecipes';
import CardDoneRecipes from '../Components/CardDoneRecipes';
import { getDoneRecipesLocalStorage } from '../Helpers/setDoneRecipesLocalStorage';

function DoneRecipes(props) {
  const { setShowSearchInput, setDoneRecipes,
    setDoneRecipesFilter } = useContext(myContext);
  useEffect(() => {
    console.log('didMount');
    setShowSearchInput((prevState) => !prevState);
    const doneRecipesLocalStorage = getDoneRecipesLocalStorage();
    setDoneRecipes(doneRecipesLocalStorage);
    setDoneRecipesFilter(doneRecipesLocalStorage);
  }, []);
  return (
    <section>
      <Header { ...props } pageTitle="Done Recipes" />
      <ButtonsDoneRecipes />
      <CardDoneRecipes />
    </section>
  );
}

export default DoneRecipes;
