import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default class ExploreFoods extends Component {
  render() {
    return (
      <>
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
}
