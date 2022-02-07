import React from 'react';
import PropTypes from 'prop-types';

function FoodIngredientCard(props) {
  const { strIngredient, index } = props;

  return (
    <div className="render-card" data-testid={ `${index}-ingredient-card` }>
      <img data-testid={ `${index}-card-img` } src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` } alt="foodImg" />
      <p data-testid={ `${index}-card-name` }>{ strIngredient }</p>
    </div>
  );
}

FoodIngredientCard.propTypes = {
  strIngredient: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default FoodIngredientCard;
