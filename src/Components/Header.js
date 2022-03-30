import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import myContext from '../Context/myContext';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

const Header = (props) => {
  console.log(props);
  const { setVisibleSearchBar } = useContext(myContext);
  const btnShowSearchBar = () => {
    setVisibleSearchBar((prevState) => (!prevState));
  };
  const btnSendtoProfile = () => {
    const { history } = props;
    history.push('/profile');
  };
  return (
    <section>
      <h1>HEADER</h1>
      <div>
        <input
          data-testid="profile-top-btn"
          type="image"
          onClick={ btnSendtoProfile }
          src={ profileIcon }
          alt="perfil"
        />
        <input
          data-testid="search-top-btn"
          type="image"
          onClick={ btnShowSearchBar }
          src={ searchIcon }
          alt="search"
        />
      </div>
      <SearchBar />
    </section>
  );
};

export default Header;
Header.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};
