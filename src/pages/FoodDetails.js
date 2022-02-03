/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import requestAPI from '../services';
import GlobalContext from '../context/GlobalContext';

function FoodDetails() {
  const { id } = useParams();
  const { detailedFood, setDetailedFood } = useContext(GlobalContext);
  useEffect(() => {
    requestAPI.meals.id(id).then((food) => setDetailedFood(food.meals[0]));
  }, []);

  return (
    <>
      <img
        data-testid="recipe-photo"
        src={ detailedFood.strMealThumb }
        alt="recipephoto"
      />
      <h1
        data-testid="recipe-title"
      >
        { detailedFood.strMeal }
      </h1>
      <button
        type="button"
        data-testid="share-btn"
      >
        Teste
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        Teste
      </button>
      <p
        data-testid="recipe-category"
      >
        { detailedFood.strCategory }
      </p>
      { console.log(Object.keys(detailedFood)) }
    </>
  );
}

export default FoodDetails;
