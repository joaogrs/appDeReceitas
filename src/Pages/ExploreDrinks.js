import React, { useContext, useEffect } from 'react';
import myContext from '../Context/myContext';
import Header from '../Components/Header';

function ExploreDrink(props) {
  const { setShowSearchInput } = useContext(myContext);
  useEffect(() => {
    console.log('didMount');
    setShowSearchInput((prevState) => !prevState);
  }, []);
  return (
    <section>
      <h1>Explore Drink</h1>
      <Header { ...props } pageTitle="Explore Drinks" />
    </section>
  );
}

export default ExploreDrink;
