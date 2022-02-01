import React from 'react';
import PropTypes from 'prop-types';

function RenderCard(props) {
  const { strMeal, strMealThumb, index } = props;

  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img data-testid={ `${index}-card-img` } src={ strMealThumb } alt="foodImg" />
      <p data-testid={ `${index}-card-name` }>{ strMeal }</p>
    </div>
  );
}

RenderCard.propTypes = {
  strMeal: PropTypes.string.isRequired,
  strMealThumb: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};

export default RenderCard;
