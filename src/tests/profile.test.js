import React from 'react';
import { screen, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Verifica página de perfil com os seguintes campos e características:', () => {
  test('A rota para esta página deve ser \'/profile\'', () => {
    const customHistory = createMemoryHistory();
    render(
      <Router history={ customHistory }>
        <App />
      </Router>,
    );

    customHistory.push('/profile');

    expect(customHistory.location.pathname).toBe('/profile');
  });

  test('Crie um botão com o texto \'Done Recipes\'', () => {
    const customHistory = createMemoryHistory();
    render(
      <Router history={ customHistory }>
        <App />
      </Router>,
    );
    customHistory.push('/profile');

    const button = screen.getByText(/Done Recipes/i);

    expect(button).toBeInTheDocument();
  });

  test('Crie um botão com o texto \'Favorites Recipes\'', () => {
    const customHistory = createMemoryHistory();
    render(
      <Router history={ customHistory }>
        <App />
      </Router>,
    );

    customHistory.push('/profile');

    const button = screen.getByText(/Favorite Recipes/i);
    expect(button).toBeInTheDocument();
  });

  test('Crie um botão com o texto \'Logout\'', () => {
    const customHistory = createMemoryHistory();
    render(
      <Router history={ customHistory }>
        <App />
      </Router>,
    );

    customHistory.push('/profile');

    const button = screen.getByText(/Logout/i);
    expect(button).toBeInTheDocument();
  });

  test('A rota deve ser mudada para \'/Done Recipes\' após o clique no botão.', () => {
    const customHistory = createMemoryHistory();
    render(
      <Router history={ customHistory }>
        <App />
      </Router>,
    );

    customHistory.push('/profile');

    const doneBtn = screen.getByTestId('profile-done-btn');

    userEvent.click(doneBtn);
    expect(customHistory.location.pathname).toBe('/done-recipes');
  });

  test('A rota deve mudar para \'/Favorites Recipes\' após o clique no botão.', () => {
    const customHistory = createMemoryHistory();
    render(
      <Router history={ customHistory }>
        <App />
      </Router>,
    );

    customHistory.push('/profile');

    const favoriteBtn = screen.getByTestId('profile-favorite-btn');

    userEvent.click(favoriteBtn);
    expect(customHistory.location.pathname).toBe('/favorite-recipes');
  });

  test('A rota deve ser mudada para \'/\' após o clique no botão.', () => {
    const customHistory = createMemoryHistory();
    render(
      <Router history={ customHistory }>
        <App />
      </Router>,
    );

    customHistory.push('/profile');

    const logoutBtn = screen.getByTestId('profile-logout-btn');

    userEvent.click(logoutBtn);
    expect(customHistory.location.pathname).toBe('/');
  });
});
