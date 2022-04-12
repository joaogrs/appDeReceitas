import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import myContext from '../Context/myContext';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import LogoNovo from '../images/logo-novo.png';
import '../styles/header.css';

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
    <section className="header">
      <div className="btns-image">
        <div className="logo-header">
          <img src={ LogoNovo } alt="" />
          <h1 data-testid="page-title">{ pageTitle }</h1>

          <div className="icons" style={ { width: '120px' } }>
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
          </div>
        </div>
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
