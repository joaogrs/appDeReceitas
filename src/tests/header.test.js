import React from 'react';
import { screen, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import App from '../App';

const RECIPE_NAME = 'Apam balik';
const SEARCH_BTN = 'search-top-btn';
const SALT = 'salt';
const SEARCH_INPUT = 'search-input';
const SEARCH_RADIO = 'name-search-radio';
const EXEC_SEARCH_BTN = 'exec-search-btn';

describe('Testa o componente Header', () => {
  test('Tem os data-testids tanto da barra de busca quanto de todos os radio-buttons',
    () => {
      const customHistory = createMemoryHistory();
      render(
        <Router history={ customHistory }>
          <App />
        </Router>,
      );
      customHistory.push('/foods');

      const selectSearch = screen.getByTestId(SEARCH_BTN);

      userEvent.click(selectSearch);

      const inputSearch = screen.getByTestId(SEARCH_INPUT);
      const radioIngredientRadio = screen.getByTestId('ingredient-search-radio');
      const searchRadio = screen.getByTestId(SEARCH_RADIO);
      const firstLetterRadio = screen.getByTestId('first-letter-search-radio');
      const searchBtn = screen.getByTestId(EXEC_SEARCH_BTN);
      expect(inputSearch).toBeInTheDocument();
      expect(radioIngredientRadio).toBeInTheDocument();
      expect(searchRadio).toBeInTheDocument();
      expect(firstLetterRadio).toBeInTheDocument();
      expect(searchBtn).toBeInTheDocument();
    });
  test('Redirecione para a tela de detalhes caso apenas uma receita seja encontrada',
    async () => {
      const customHistory = createMemoryHistory();
      render(
        <Router history={ customHistory }>
          <App />
        </Router>,
      );
      customHistory.push('/foods');
      const selectSearch = screen.getByTestId(SEARCH_BTN);

      userEvent.click(selectSearch);

      const inputSearch = screen.getByTestId(SEARCH_INPUT);
      const searchRadio = screen.getByTestId(SEARCH_RADIO);
      const searchBtn = screen.getByTestId(EXEC_SEARCH_BTN);
      userEvent.click(searchRadio);
      userEvent.type(inputSearch, RECIPE_NAME);
      userEvent.click(searchBtn);

      const recipeDetails = await screen.findByTestId('recipe-details');

      expect(recipeDetails).toBeInTheDocument();
    });
  test('Mostre as receitas em cards caso mais de uma seja encontrada', async () => {
    const customHistory = createMemoryHistory();
    render(
      <Router history={ customHistory }>
        <App />
      </Router>,
    );

    customHistory.push('/foods');

    const selectSearch = screen.getByTestId(SEARCH_BTN);

    userEvent.click(selectSearch);

    const inputSearch = screen.getByTestId(SEARCH_INPUT);
    const searchIngredientRadio = screen.getByTestId('ingredient-search-radio');
    const searchBtn = screen.getByTestId(EXEC_SEARCH_BTN);

    userEvent.type(inputSearch, SALT);
    userEvent.click(searchIngredientRadio);
    userEvent.click(searchBtn);

    const card1 = await screen.findByTestId('0-recipe-card');
    const card2 = await screen.findByTestId('1-recipe-card');

    expect(card1).toBeInTheDocument();
    expect(card2).toBeInTheDocument();
  });
});
