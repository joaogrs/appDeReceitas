import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import App from './App';
import Footer from './Components/Footer';

test('Farewell, front-end', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/TRYBE/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Testa o componente Footer', () => {
  test('Tem os data-testids footer, drinks-bottom-btn, explore-bottom-btn e food-bottom-btn', () => {
    render(<Footer/>)
    const footer = getByTestId('footer')
    const drinkBtn = getByTestId('drinks-bottom-btn')
    const exploreBtn = getByTestId('explore-bottom-btn')
    const foodBtn = getByTestId('food-bottom-btn')

    expect(footer).toBeInTheDocument()

    expect(drinkBtn).toBeInTheDocument()

    expect(exploreBtn).toBeInTheDocument()

    expect(foodBtn).toBeInTheDocument()
  })
  test('Verifica se os icones estão corretos ', () => {
    render(<Footer/>)
    const drinkBtn = getByTestId('drinks-bottom-btn')
    const exploreBtn = getByTestId('explore-bottom-btn')
    const foodBtn = getByTestId('food-bottom-btn')

    expect(drinkBtn.src).toContain('drinkIcon.svg')
    expect(exploreBtn.src).toContain('exploreIcon.svg')
    expect(foodBtn.src).toContain('mealIcon.svg')
  })
  test('Verifica se os butões estão redirecionando corretamente', () => {
    const customHistory = createMemoryHistory()
    render(
      <Router history={customHistory}>
        <Footer />
      </Router>
    )
    const drinkBtn = getByTestId('drinks-bottom-btn')
    const exploreBtn = getByTestId('explore-bottom-btn')
    const foodBtn = getByTestId('food-bottom-btn')

    userEvent.click(drinkBtn)
    expect(customHistory.location.pathname).toBe('/drinks')
    userEvent.click(exploreBtn)
    expect(customHistory.location.pathname).toBe('/explore')
    userEvent.click(foodBtn)
    expect(customHistory.location.pathname).toBe('/foods')
  })
})