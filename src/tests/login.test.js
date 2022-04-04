import React from 'react';
import { screen, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import Login from '../Pages/Login';
import App from '../App';

const VALID_EMAIL = 'alguem@email.com';
const VALID_PASSWORD = '123456';

describe('Verifica página de login com os seguintes campos e características:', () => {
  test('A rota para esta página deve ser \'/\'', () => {
    const customHistory = createMemoryHistory();
    render(
      <Router history={ customHistory }>
        <App />
      </Router>,
    );

    expect(customHistory.location.pathname).toBe('/');
  });

  test('Crie um local para que o usuário insira seu email e senha', () => {
    const customHistory = createMemoryHistory();
    render(
      <Router history={ customHistory }>
        <App />
      </Router>,
    );

    const email = screen.getByTestId('email-input');
    const senha = screen.getByTestId('password-input');

    expect(email).toBeInTheDocument();
    expect(senha).toBeInTheDocument();
  });

  test('Crie um botão com o texto \'Enter\'', () => {
    const customHistory = createMemoryHistory();
    render(
      <Router history={ customHistory }>
        <App />
      </Router>,
    );

    const button = screen.getByText(/Enter/i);
    expect(button).toBeInTheDocument();
  });

  test('Realize as seguintes verificações nos campos de email, senha e botão:', () => {
    const customHistory = createMemoryHistory();
    render(
      <Router history={ customHistory }>
        <App />
      </Router>,
    );
    const email = screen.getByTestId('email-input');
    const senha = screen.getByTestId('password-input');

    const button = screen.getByText(/Enter/i);
    expect(button).toBeDisabled();

    userEvent.type(email, VALID_EMAIL);
    userEvent.type(senha, VALID_PASSWORD);
    expect(button).toBeDisabled(false);
  });

  test('A rota deve ser mudada para \'/foods\' após o clique no botão.', () => {
    const customHistory = createMemoryHistory();
    render(
      <Router history={ customHistory }>
        <Login />
      </Router>,
    );

    const loginBtn = screen.getByTestId('login-submit-btn');

    userEvent.click(loginBtn);
    expect(customHistory.location.pathname).toBe('/');
  });
});
