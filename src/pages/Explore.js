import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Explore extends Component {
  render() {
    return (
      <div>
        <Link to="/explore/foods">
          <button
            type="button"
            data-testid="explore-foods"
          >
            Explore Foods
          </button>
        </Link>
        <Link to="/explore/drinks">
          <button
            type="button"
            data-testid="explore-drinks"
          >
            Explore Drinks
          </button>
        </Link>
      </div>
    );
  }
}
