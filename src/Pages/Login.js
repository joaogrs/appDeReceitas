import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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
    <div>
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
      <button
        id="buttonEnter"
        type="button"
        data-testid="login-submit-btn"
        disabled={ disabled }
        onClick={ handleClick }
      >
        Enter
      </button>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default Login;
