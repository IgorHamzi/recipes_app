import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default class Explore extends Component {
  render() {
    return (
      <>
        <div>
          <div data-testid="profile-email">email</div>
          <Link to="/done-recipes">
            <button
              type="button"
              data-testid="profile-done-btn"
            >
              Done Recipes
            </button>
          </Link>
          <Link to="/favorite-recipes">
            <button
              type="button"
              data-testid="profile-favorite-btn"
            >
              Favorite Recipes
            </button>
          </Link>
          <Link to="/">
            <button
              type="button"
              data-testid="profile-logout-btn"
            >
              Logout
            </button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }
}
