import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

function Provider({ children }) {
  const [isHiddenSearchBar, setVisibleSearchBar] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(true);
  const stateContext = {
    isHiddenSearchBar,
    setVisibleSearchBar,
    showSearchInput,
    setShowSearchInput,
  };

  return (
    <MyContext.Provider value={ stateContext }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default Provider;
// oi
