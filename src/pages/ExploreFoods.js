/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';
import requestAPI from '../services';

function ExploreFoods() {
  const { randomRecipe, setRandomRecipe } = useContext(GlobalContext);

  useEffect(() => {
    requestAPI.meals.randomFood().then((data) => setRandomRecipe(data.meals[0]));
  }, []);

  return (
    <>
      <Header title="Explore Foods" haveSearch={ false } />
      <div>
        <Link to="/explore/foods/ingredients">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            By Ingredient
          </button>
        </Link>
        <Link to="/explore/foods/nationalities">
          <button
            type="button"
            data-testid="explore-by-nationality"
          >
            By Nationality
          </button>
        </Link>
        <Link to={ `/foods/${randomRecipe.idMeal}` }>
          <button
            type="button"
            data-testid="explore-surprise"
          >
            Surprise me!
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default ExploreFoods;
