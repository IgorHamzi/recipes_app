import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [enableSearch, setEnableSearch] = useState(false);
  const [data, setData] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [meals, setMeals] = useState([]);
  const [senha, setSenha] = useState();
  const [mail, setMail] = useState();
  const [redirect, setRedirect] = useState(false);
  const [detailedFood, setDetailedFood] = useState([]);
  const [recomendations, setRecomendations] = useState([]);
  const [randomRecipe, setRandomRecipe] = useState([]);

  const funt = async (m, s) => {
    console.log('dsds');
    setSenha(s);
    setMail(m);
    const ob = { email: m };
    localStorage.setItem('mealsToken', 1); // type="text"
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(ob));
    const y = 1020;
    setTimeout(() => { setRedirect(true); }, y);
  };

  const contextValue = {
    enableSearch,
    setEnableSearch,
    data,
    setData,
    drinks,
    setDrinks,
    meals,
    setMeals,
    user: {
      mail,
      senha,
    },
    funt,
    redirect,
    detailedFood,
    setDetailedFood,
    recomendations,
    setRecomendations,
    randomRecipe,
    setRandomRecipe,
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
