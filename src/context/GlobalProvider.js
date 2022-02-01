import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [enableSearch, setEnableSearch] = useState(false);
  const [data, setData] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [meals, setMeals] = useState([]);

  const contextValue = {
    enableSearch,
    setEnableSearch,
    data,
    setData,
    drinks,
    setDrinks,
    meals,
    setMeals,
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
