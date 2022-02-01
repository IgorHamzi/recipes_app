import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreFoods() {
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
        <Link to="/">
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
