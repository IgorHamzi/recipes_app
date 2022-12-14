import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function GlobalProvider({ children }) {
  const [enableSearch, setEnableSearch] = useState(false);
  const [data, setData] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [meals, setMeals] = useState([{ strCategory: '', idMeal: '', strMealThumb: '' }]);
  const [senha, setSenha] = useState();
  const [mail, setMail] = useState();
  const [redirect, setRedirect] = useState(false);
  const [detailedFood, setDetailedFood] = useState([]);
  const [recomendations, setRecomendations] = useState([]);
  const [randomRecipe, setRandomRecipe] = useState([]);
  const [likeStatus, setLikeStatus] = useState(whiteHeartIcon);
  const [allNationalities, setAllNationalities] = useState([]);
  const [nationalitySelected, setNationalitySelected] = useState('All');
  const [categoryF, setCategoryF] = useState([{ strCategory: '' }]);
  const [categoryD, setCategoryD] = useState(['All']);
  const [defcategoryD, setDefcategoryD] = useState(false);
  const [defcategoryF, setDefcategoryF] = useState(false);
  const [defcategoryFv, setDefcategoryFv] = useState('');
  const [defcategoryDv, setDefcategoryDv] = useState('');

  const funt = async (m, s) => {
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
    likeStatus,
    setLikeStatus,
    allNationalities,
    setAllNationalities,
    nationalitySelected,
    setNationalitySelected,
    categoryF,
    setCategoryF,
    categoryD,
    setCategoryD,
    defcategoryD,
    setDefcategoryD,
    defcategoryF,
    setDefcategoryF,
    defcategoryFv,
    setDefcategoryFv,
    defcategoryDv,
    setDefcategoryDv,
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
