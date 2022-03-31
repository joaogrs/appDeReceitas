import React, { useContext, useEffect } from 'react';
import myContext from '../Context/myContext';
import Header from '../Components/Header';

function ExploreRecipes(props) {
  const { setShowSearchInput } = useContext(myContext);
  useEffect(() => {
    console.log('didMount');
    setShowSearchInput((prevState) => !prevState);
  }, []);
  return (
    <section>
      <h1>Explore Recipes</h1>
      <Header { ...props } pageTitle="Explore Foods" />
    </section>
  );
}

export default ExploreRecipes;
