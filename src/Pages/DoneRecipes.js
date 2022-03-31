import React, { useContext, useEffect } from 'react';
import myContext from '../Context/myContext';
import Header from '../Components/Header';

function DoneRecipes(props) {
  const { setShowSearchInput } = useContext(myContext);
  useEffect(() => {
    console.log('didMount');
    setShowSearchInput((prevState) => !prevState);
  }, []);
  return (
    <section>
      <h1>Done Recipes</h1>
      <Header { ...props } pageTitle="Done Recipes" />
    </section>
  );
}

export default DoneRecipes;
