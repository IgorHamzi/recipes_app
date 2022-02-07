/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import requestAPI from '../services';
import GlobalContext from '../context/GlobalContext';
import FavoriteBtn from '../components/FavoriteBtn';
import ShareBtn from '../components/ShareBtn';

function DrinkInProgress() {
  const { id } = useParams();
  const { detailedFood, setDetailedFood } = useContext(GlobalContext);
  useEffect(() => {
    requestAPI.drinks.id(id).then((food) => setDetailedFood(food.drinks[0]));
  }, []);

  const itemArray = Object.entries(detailedFood).filter((item) => {
    if (item[0].includes('strIngredient') && item[1] !== '') {
      return item[1];
    }
    return '';
  });

  const msar = Object.entries(detailedFood).filter((it) => it[0].includes('strMeasure'));
  return (
    <>
      <img
        data-testid="recipe-photo"
        src={ detailedFood.strDrinkThumb }
        alt="recipephoto"
      />
      <h1
        data-testid="recipe-title"
      >
        { detailedFood.strDrink }
      </h1>
      <ShareBtn
        id={ id }
        foodType="drinks"
        dataId="share-btn"
      />
      <FavoriteBtn
        id={ id }
        type="drink"
        nationality=""
        category={ detailedFood.strCategory }
        alcoholicOrNot={ detailedFood.strAlcoholic }
        name={ detailedFood.strDrink }
        image={ detailedFood.strDrinkThumb }
      />
      <p
        data-testid="recipe-category"
      >
        { detailedFood.strAlcoholic }
      </p>
      <ul className="ingredient">
        { itemArray.map((it, i) => (
          <li
            data-testid={ `${i}-ingredient-step` }
            key={ i }
          >
            <input type="checkbox" />
            {msar[i][1] === null ? `${it[1]}` : `${it[1]} - ${msar[i][1]}`}
          </li>))}
      </ul>
      <p
        data-testid="instructions"
      >
        { detailedFood.strInstructions }
      </p>
      <p>
        { `Cup: ${detailedFood.strGlass}` }
      </p>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        className="start-btn"
      >
        <a
          href={ `/drinks/${id}/in-progress` }

        >
          Finish Recipe
        </a>
      </button>
    </>
  );
}

export default DrinkInProgress;
