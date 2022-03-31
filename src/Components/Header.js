import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import myContext from '../Context/myContext';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

const Header = (props) => {
  const { pageTitle } = props;
  const { setVisibleSearchBar, showSearchInput } = useContext(myContext);
  const btnShowSearchBar = () => {
    setVisibleSearchBar((prevState) => (!prevState));
  };
  const btnSendtoProfile = () => {
    const { history } = props;
    history.push('/profile');
  };
  return (
    <section>
      <h1 data-testid="page-title">{ pageTitle }</h1>
      <div>
        <input
          data-testid="profile-top-btn"
          type="image"
          onClick={ btnSendtoProfile }
          src={ profileIcon }
          alt="perfil"
        />
        {showSearchInput ? (
          <input
            data-testid="search-top-btn"
            type="image"
            onClick={ btnShowSearchBar }
            src={ searchIcon }
            alt="search"
          />) : null}
        <Link to="/foods/100">
          <button type="button">Teste</button>
        </Link>
      </div>
      <SearchBar { ...props } />
    </section>
  );
};

export default Header;

Header.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
  pageTitle: PropTypes.string.isRequired,
};
