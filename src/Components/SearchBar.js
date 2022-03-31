import React, { useContext, useState } from 'react';
import myContext from '../Context/myContext';

const SearchBar = () => {
  const [stateSearchBar, setStateSearchBar] = useState({ searchOption: '',
    searchInput: '' });
  const { isHiddenSearchBar } = useContext(myContext);
  const handleInputSearch = ({ target: { name, value } }) => {
    console.log('name', name, 'value', value);
    // setStateSearchBar((prevState) => ({ ...prevState, [name]: value }));
    setStateSearchBar({ ...stateSearchBar, [name]: value });
  };
  const handleBtnSearch = () => {
    console.log('Clicou');
  };
  return (
    <div>
      { isHiddenSearchBar ? (
        <form>
          <input
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

export default SearchBar;
