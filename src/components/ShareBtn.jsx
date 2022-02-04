import React from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

function ShareBtn(props) {
  const { id, foodType } = props;

  function copyToClip(idElement, foodTypeElement) {
    const textToCopy = `http://localhost:3000/${foodTypeElement}/${idElement}`;
    copy(textToCopy);
    alert('Link copied!');
  }

  return (
    <>
      <button
        type="button"
        onClick={ () => copyToClip(id, foodType) }
        data-testid="share-btn"
        src={ shareIcon }
      >
        <p>Link copied!</p>
        <img src={ shareIcon } alt="share-icon" />
      </button>
      <p>teste</p>
    </>
  );
}

ShareBtn.propTypes = {
  id: PropTypes.number.isRequired,
  foodType: PropTypes.string.isRequired,
};

export default ShareBtn;
