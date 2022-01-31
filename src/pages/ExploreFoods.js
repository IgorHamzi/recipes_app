import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ExploreFoods extends Component {
  render() {
    return (
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
        <Link to="/">
          <button
            type="button"
            data-testid="explore-surprise"
          >
            Surprise me!
          </button>
        </Link>
      </div>
    );
  }
}
