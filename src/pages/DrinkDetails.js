/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import requestAPI from '../services';
import GlobalContext from '../context/GlobalContext';
import RenderCard from '../components/RenderCard';

function DrinkDetails() {
  const six = 6;
  const { id } = useParams();
  const { detailedFood, setDetailedFood } = useContext(GlobalContext);
  const { recomendations, setRecomendations } = useContext(GlobalContext);
  useEffect(() => {
    requestAPI.meals.nameOrFirst12().then((data) => setRecomendations(data.meals));
    requestAPI.drinks.id(id).then((food) => setDetailedFood(food.drinks[0]));
  }, []);

  const itemArray = Object.entries(detailedFood).filter((item) => {
    if (item[0].includes('strIngredient') && item[1] !== '') {
      return item[1];
    }
    return '';
  });

  const measureArray = Object.entries(detailedFood).filter((item) => {
    if (item[0].includes('strMeasure')) {
      return item[1];
    }
    return ' ';
  });

  return (
    <>
      { console.log(measureArray) }
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
        { detailedFood.strAlcoholic }
      </p>
      <ul className="ingredient">
        { itemArray.map((it, i) => (
          <li
            data-testid={ `${i}-ingredient-name-and-measure` }
            key={ i }
          >
            {`${it[1]}: ${measureArray[i][1]}`}
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
      <div className="recomendation-card">
        { recomendations.slice(0, six).map((food, index) => (
          <Link
            to={ `/foods/${food.idMeal}` }
            key={ food.idMeal }
            data-testid={ `${index}-recomendation-card` }
          >
            <RenderCard
              key={ food.idMeal }
              strMeal={ food.strMeal }
              strMealThumb={ food.strMealThumb }
              index={ index }
            />
          </Link>
        )) }
      </div>
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="start-btn"
      >
        <a
          href={ `/drinks/${id}/in-progress` }

        >
          Start Recipe
        </a>
      </button>
    </>
  );
}

export default DrinkDetails;
