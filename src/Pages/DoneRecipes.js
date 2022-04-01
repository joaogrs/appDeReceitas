import React, { useContext, useEffect } from 'react';
import myContext from '../Context/myContext';
import Header from '../Components/Header';
import ButtonsDoneRecipes from '../Components/ButtonsDoneRecipes';
import CardDoneRecipes from '../Components/CardDoneRecipes';

function DoneRecipes(props) {
  const { setShowSearchInput } = useContext(myContext);
  useEffect(() => {
    console.log('didMount');
    setShowSearchInput((prevState) => !prevState);
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
