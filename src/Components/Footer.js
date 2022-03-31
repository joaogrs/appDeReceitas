import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/footer.css';

function Footer() {
  const history = useHistory();
  return (
    <footer data-testid="footer" className="footer">
      <button
        type="button"
        data-testid="drinks-bottom-btn"
        src={ drinkIcon }
        onClick={ () => history.push('/drinks') }
      >
        <img src={ drinkIcon } alt="drink img" />
      </button>

      <button
        type="button"
        data-testid="explore-bottom-btn"
        src={ exploreIcon }
        onClick={ () => history.push('/explore') }
      >
        <img src={ exploreIcon } alt="explore img" />
      </button>

      <button
        type="button"
        data-testid="food-bottom-btn"
        src={ mealIcon }
        onClick={ () => history.push('/foods') }
      >
        <img src={ mealIcon } alt="food img" />
      </button>
    </footer>
  );
}

export default Footer;
