import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Footer from '../Components/Footer';
import myContext from '../Context/myContext';
import Header from '../Components/Header';

function Explore(props) {
  const { history } = props;
  const { setShowSearchInput } = useContext(myContext);
  useEffect(() => {
    // console.log('didMount');
    setShowSearchInput((prevState) => !prevState);
  }, []);

  const handleFoods = () => {
    history.push('./explore/foods');
  };

  const handleDrinks = () => {
    history.push('./explore/drinks');
  };

  return (
    <section>
      <h1>Explore</h1>
      <Header { ...props } pageTitle="Explore" />
      <Footer />

      <button
        type="button"
        data-testid="explore-foods"
        onClick={ handleFoods }
      >
        Explore Foods
      </button>
      <button
        type="button"
        data-testid="explore-drinks"
        onClick={ handleDrinks }
      >
        Explore Drinks
      </button>
    </section>
  );
}

Explore.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default Explore;
