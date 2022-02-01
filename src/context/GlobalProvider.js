import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [enableSearch, setEnableSearch] = useState(false);

  const contextValue = {
    enableSearch,
    setEnableSearch,
  };

  return (
    <GlobalContext.Provider value={ contextValue }>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
