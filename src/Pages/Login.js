import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LogoNovo from '../images/logo-novo.png';
import '../styles/login.css';

function Login(props) {
  const { history } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    const enableButton = async () => {
      const minLengthPassword = 6;
      const emailVerify = email.includes('@') && email.includes('.com');
      if (emailVerify && password.length > minLengthPassword) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    };
    enableButton();
  }, [email, password]);

  const handleClick = async () => {
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));

    const obj = { email };
    localStorage.setItem('user', JSON.stringify(obj));

    history.push('/foods');
  };

  return (
    <div className="login-container">
      <div className="logoImage">
        <img src={ LogoNovo } alt="" />
      </div>
      <div className="inputs">
        <input
          type="email"
          name="email"
          value={ email }
          data-testid="email-input"
          placeholder="E-mail"
          onChange={ handleEmail }
        />
        <input
          type="password"
          name="password"
          value={ password }
          data-testid="password-input"
          placeholder="Senha"
          onChange={ handlePassword }
        />
        <div>
          <button
            id="buttonEnter"
            type="button"
            data-testid="login-submit-btn"
            disabled={ disabled }
            onClick={ handleClick }
            className="button-enter"
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default Login;
