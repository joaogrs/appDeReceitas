import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Footer from '../Components/Footer';
import myContext from '../Context/myContext';
import Header from '../Components/Header';
import '../styles/explore.css';

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
    <section className="container-explore">
      <Header { ...props } pageTitle="Explore" />
      <div className="btns-container">
        <div className="btn-one">
          <button
            type="button"
            data-testid="explore-foods"
            onClick={ handleFoods }
          >
            Explore Foods
          </button>
        </div>
        <div className="btn-two">
          <button
            type="button"
            data-testid="explore-drinks"
            onClick={ handleDrinks }
          >
            Explore Drinks
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
}

Explore.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default Explore;
