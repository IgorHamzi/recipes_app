import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  const localStorageMail = localStorage.getItem('user');
  const email = JSON.parse(localStorageMail);
  return (
    <>
      <Header title="Profile" haveSearch={ false } />
      <div>
        <div data-testid="profile-email">email</div>
        { email ? (<h1 data-testid="profile-email">{ email.email }</h1>) : null}
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
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => localStorage.clear() }
        >
          <a href="/">
            Logout
          </a>
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
