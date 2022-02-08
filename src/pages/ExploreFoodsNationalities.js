/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';
import requestAPI from '../services';
import RenderCard from '../components/RenderCard';

function ExploreFoodsNationalities() {
  const {
    allNationalities,
    setAllNationalities,
    meals,
    setMeals,
    nationalitySelected,
    setNationalitySelected,
  } = useContext(GlobalContext);

  const twelve = 12;

  function handleChange({ target }) {
    setNationalitySelected(target.value);
  }

  useEffect(() => {
    requestAPI.meals.nationalities().then((data) => setAllNationalities(data.meals));
    requestAPI.meals.nameOrFirst12().then((data) => setMeals(data.meals));
  }, []);

  useEffect(() => {
    if (nationalitySelected === 'All') {
      requestAPI.meals.nameOrFirst12().then((data) => setMeals(data.meals));
    } else {
      requestAPI.meals.nationality(nationalitySelected).then((d) => setMeals(d.meals));
    }
  }, [nationalitySelected]);

  return (
    <>
      <Header title="Explore Nationalities" haveSearch />
      <select
        data-testid="explore-by-nationality-dropdown"
        value={ nationalitySelected }
        onChange={ handleChange }
      >
        {console.log(nationalitySelected)}
        <option data-testid="All-option">All</option>
        { allNationalities.map((opt) => (
          <option
            key={ opt.strArea }
            value={ opt.strArea }
            data-testid={ `${opt.strArea}-option` }
          >
            {opt.strArea}
          </option>))}
      </select>
      { meals.slice(0, twelve).map((food, index) => (
        <Link to={ `/foods/${food.idMeal}` } key={ food.idMeal }>
          <RenderCard
            key={ food.idMeal }
            strMeal={ food.strMeal }
            strMealThumb={ food.strMealThumb }
            index={ index }
          />
        </Link>
      )) }
      <Footer />
    </>
  );
}

export default ExploreFoodsNationalities;
