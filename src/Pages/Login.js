import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';

function Login(props) {
  const { history } = props;
  return (
    <section>
      <h1>Hello</h1>
      <Header history={ history } />
    </section>
  );
}

export default Login;
Login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};
