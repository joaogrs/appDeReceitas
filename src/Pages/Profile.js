import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import myContext from '../Context/myContext';
import getEmailLocalStorage from '../Helpers/getEmailLocalStorage';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../styles/profile.css';

function Profile(props) {
  const { history } = props;

  const { setShowSearchInput } = useContext(myContext);

  useEffect(() => {
    setShowSearchInput((prevState) => !prevState);
  }, [setShowSearchInput]);

  const handleClick = () => {
    localStorage.clear();

    history.push('/');
  };

  return (
    <section>
      <Header { ...props } pageTitle="Profile" />

      <div className="email">
        <h4 data-testid="profile-email">{ getEmailLocalStorage() }</h4>
      </div>

      <div className="btns_profile">
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </button>

        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </button>

        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ handleClick }
        >
          Logout
        </button>
      </div>
      <Footer />
    </section>);
}

Profile.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default Profile;
