import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  return (
    <>
      <Header title="Profile" haveSearch={ false } />
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

export default Profile;
