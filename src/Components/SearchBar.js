import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import myContext from '../Context/myContext';
import { endpointDrink, endpointMeal, fetchApi } from '../Helpers/useFetch';
import { alertOneLetter, alertRecipesNotFound } from '../Helpers/alertFunctions';
import '../styles/search_bar.css';

const SearchBar = (props) => {
  const { history } = props;
  const { history: { location } } = props;
  const [stateSearchBar, setStateSearchBar] = useState({ searchOption: '',
    searchInput: '' });

  const { isHiddenSearchBar, setApiData } = useContext(myContext);

  const handleInputSearch = ({ target: { name, value } }) => {
    setStateSearchBar({ ...stateSearchBar, [name]: value });
  };

  const oneRecipeFound = ({ meals, drinks }) => {
    if (meals && meals.length === 1) {
      history.push(`/foods/${meals[0].idMeal}`);
    }
    if (drinks && drinks.length === 1) {
      history.push(`/drinks/${drinks[0].idDrink}`);
    }
  };

  const verifyPathname = () => {
    const { searchOption, searchInput } = stateSearchBar;
    if (location.pathname === '/foods') {
      return endpointMeal(searchInput, searchOption);
    }
    if (location.pathname === '/drinks') {
      return endpointDrink(searchInput, searchOption);
    }
  };

  const handleBtnSearch = async () => {
    const { searchOption, searchInput } = stateSearchBar;

    const endpointCorrect = verifyPathname();
    alertOneLetter(searchOption, searchInput);

    const dataApi = await fetchApi(endpointCorrect);

    oneRecipeFound(dataApi);

    alertRecipesNotFound(dataApi);

    setApiData(dataApi);
  };

  return (
    <div className="searchBar">
      { isHiddenSearchBar ? (
        <form className="formSearch">
          <input
            className="input_search"
            data-testid="search-input"
            type="text"
            name="searchInput"
            value={ stateSearchBar.searchInput }
            onChange={ (event) => { handleInputSearch(event); } }
          />
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            name="searchOption"
            value="ingredient"
            onChange={ (event) => { handleInputSearch(event); } }
          />
          Ingrediente
          <input
            type="radio"
            data-testid="name-search-radio"
            value="name"
            name="searchOption"
            onChange={ (event) => { handleInputSearch(event); } }
          />
          Nome
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            value="firstLetter"
            name="searchOption"
            onChange={ (event) => { handleInputSearch(event); } }
          />
          First Letter
          <button
            data-testid="exec-search-btn"
            type="button"
            onClick={ handleBtnSearch }
          >
            Search
          </button>
        </form>) : null}
    </div>
  );
};

SearchBar.propTypes = {
  history: PropTypes
    .shape({ location: PropTypes
      .shape({ pathname: PropTypes.string }),
    push: PropTypes.func }).isRequired,
};

export default SearchBar;
