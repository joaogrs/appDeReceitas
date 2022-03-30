import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

function Provider({ children }) {
  const [isHiddenSearchBar, setVisibleSearchBar] = useState(true);
  const stateContext = {
    isHiddenSearchBar,
    setVisibleSearchBar,
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
