import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShareBtn from './ShareBtn';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoriteCard(props) {
  const {
    image,
    name,
    category,
    nationality,
    alcoholicOrNot,
    id,
    index,
  } = props;

  function unfavFood() {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    for (let i = 0; i < favoriteRecipes.length; i += 1) {
      if (id === favoriteRecipes[i].id) {
        favoriteRecipes.splice(i, 1);
        localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
      }
    }
  }

  function isFoodOrDrink() {
    if (alcoholicOrNot === '') {
      return 'foods';
    }
    return 'drinks';
  }

  return (
    <div>
      {() => isFoodOrDrink()}
      <Link to={ `/${isFoodOrDrink()}/${id}` }>
        <div>
          <img data-testid={ `${index}-horizontal-image` } src={ image } alt="food-img" />
          <div>
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              {`${nationality} - ${category}`}
            </p>
            <p data-testid={ `${index}-horizontal-top-text` }>{alcoholicOrNot}</p>
            <p data-testid={ `${index}-horizontal-name` }>{name}</p>
          </div>
        </div>
      </Link>
      <ShareBtn
        dataId={ `${index}-horizontal-share-btn` }
        id={ id }
        foodType={ isFoodOrDrink() }
      />
      <button
        type="button"
        onClick={ () => unfavFood() }
        src={ blackHeartIcon }
        data-testid={ `${index}-horizontal-favorite-btn` }
      >
        <img src={ blackHeartIcon } alt="icon fav" />
      </button>
    </div>
  );
}

FavoriteCard.propTypes = {
  id: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default FavoriteCard;
