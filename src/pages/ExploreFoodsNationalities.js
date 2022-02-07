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
  } = useContext(GlobalContext);

  const twelve = 12;

  useEffect(() => {
    requestAPI.meals.nationalities().then((data) => setAllNationalities(data.meals));
    requestAPI.meals.nameOrFirst12().then((data) => setMeals(data.meals));
  }, []);

  return (
    <>
      <Header title="Explore Nationalities" haveSearch />
      <select data-testid="explore-by-nationality-dropdown">
        <option data-testid="All-option">All</option>
        { allNationalities.map((opt) => (
          <option
            key={ opt.strArea }
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
