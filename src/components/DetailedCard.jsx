import React from 'react';
import PropTypes from 'prop-types';

function DetailedCard(props) {
  const { strMeal, strMealThumb, index } = props;

  return (
    <div className="render-card" data-testid={ `${index}-recipe-card` }>
      <img data-testid={ `${index}-card-img` } src={ strMealThumb } alt="foodImg" />
      <p data-testid={ `${index}-recomendation-title` }>{ strMeal }</p>
    </div>
  );
}

DetailedCard.propTypes = {
  strMeal: PropTypes.string.isRequired,
  strMealThumb: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default DetailedCard;
