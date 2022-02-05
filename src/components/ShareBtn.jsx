import React from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

function ShareBtn(props) {
  const { id, foodType, dataId } = props;

  function copyToClip(idElement, foodTypeElement) {
    const textToCopy = `http://localhost:3000/${foodTypeElement}/${idElement}`;
    copy(textToCopy);
    // eslint-disable-next-line no-alert
    alert('Link copied!');
  }

  return (
    <>
      <button
        type="button"
        onClick={ () => copyToClip(id, foodType) }
        data-testid={ dataId }
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
  dataId: PropTypes.string.isRequired,
};

export default ShareBtn;
