/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';
import requestAPI from '../services';

function ExploreDrinks() {
  const { randomRecipe, setRandomRecipe } = useContext(GlobalContext);

  useEffect(() => {
    requestAPI.drinks.randomDrinks().then((data) => setRandomRecipe(data.drinks[0]));
  }, []);

  return (
    <>
      <Header title="Explore Drinks" haveSearch={ false } />
      <div>
        <Link to="/explore/drinks/ingredients">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            By Ingredient
          </button>
        </Link>
        <Link to={ `/drinks/${randomRecipe.idDrink}` }>
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

export default ExploreDrinks;
