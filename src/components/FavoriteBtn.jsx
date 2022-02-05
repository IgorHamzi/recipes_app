import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import GlobalContext from '../context/GlobalContext';

function FavoriteBtn(props) {
  const { id, type, nationality, category, alcoholicOrNot, name, image } = props;
  const { likeStatus, setLikeStatus } = useContext(GlobalContext);
  // id: idMeal ou idDrink
  // type: passa por string na pag
  // nationatily: strArea e drinks  ''
  // category: strCategory
  // alcoholicOrNot: '' e strAlcoholic
  // name: strMeal ou strDrink
  // image: strMealThumb ou strDrinkThumb
  // if (localstorage.getItem('favoriteRecipes') === null) => cria local storage
  // else => parse local storage com a key 'favoriteRecipes',
  const theHeart = likeStatus;
  const theObj = {
    id,
    type,
    nationality,
    category,
    alcoholicOrNot,
    name,
    image,
  };

  useEffect(() => {
    const initialEntries = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setLikeStatus(whiteHeartIcon);
    if (initialEntries !== null) {
      for (let i = 0; i < initialEntries.length; i += 1) {
        if (theObj.id === initialEntries[i].id) {
          setLikeStatus(blackHeartIcon);
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function saveLocalStorage(obj) {
    let existingEntries = JSON.parse(localStorage.getItem('favoriteRecipes')); // array

    // desabilitando o botao caso já exista
    if (existingEntries !== null) {
      for (let i = 0; i < existingEntries.length; i += 1) {
        if (obj.id === existingEntries[i].id) {
          existingEntries.splice(i, 1);
          localStorage.setItem('favoriteRecipes', JSON.stringify(existingEntries));
          return setLikeStatus(whiteHeartIcon);
        }
      }
    }

    if (existingEntries === null) {
      existingEntries = [];
    }

    existingEntries.push(obj);
    setLikeStatus(blackHeartIcon);
    localStorage.setItem('favoriteRecipes', JSON.stringify(existingEntries));
  }

  return (
    <>
      {console.log(theObj)}
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ () => saveLocalStorage(theObj) }
        src={ theHeart }
      >
        <img src={ theHeart } alt="like-status" />
      </button>
    </>
  );
}

FavoriteBtn.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FavoriteBtn;
