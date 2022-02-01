import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <Link
        to="/drinks"
      >
        <a
          src={ drinkIcon }
          href="/drinks"
          data-testid="drinks-bottom-btn"
        >
          <img src={ drinkIcon } alt="drink icon" />
        </a>
      </Link>

      <Link
        to="/explore"
      >
        <a
          src={ exploreIcon }
          href="/explore"
          data-testid="explore-bottom-btn"
        >
          <img src={ exploreIcon } alt="explore icon" />
        </a>
      </Link>

      <Link
        to="/foods"
      >
        <a
          src={ mealIcon }
          href="/foods"
          data-testid="food-bottom-btn"
        >
          <img src={ mealIcon } alt="food icon" />
        </a>
      </Link>
    </footer>
  );
}

export default Footer;
