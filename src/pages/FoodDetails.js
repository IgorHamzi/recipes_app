/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import requestAPI from '../services';
import GlobalContext from '../context/GlobalContext';
import FavoriteBtn from '../components/FavoriteBtn';
import ShareBtn from '../components/ShareBtn';
import DetailedCard from '../components/DetailedCard';

function FoodDetails() {
  const six = 6;
  const { id } = useParams();
  const { detailedFood, setDetailedFood } = useContext(GlobalContext);
  const { recomendations, setRecomendations } = useContext(GlobalContext);
  useEffect(() => {
    requestAPI.drinks.nameOrFirst12().then((data) => setRecomendations(data.drinks));
    requestAPI.meals.id(id).then((food) => setDetailedFood(food.meals[0]));
  }, []);

  const itemArray = Object.entries(detailedFood).filter((item) => {
    if (item[0].includes('strIngredient') && item[1] !== '') {
      return item[1];
    }
    return '';
  });

  const measureArray = Object.entries(detailedFood).filter((item) => {
    if (item[0].includes('strMeasure') && item[1] !== ' ') {
      return item[1];
    }
    return '';
  });

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
      <ShareBtn
        id={ id }
        foodType="foods"
        dataId="share-btn"
      />
      <FavoriteBtn
        id={ id }
        type="food"
        nationality={ detailedFood.strArea }
        category={ detailedFood.strCategory }
        alcoholicOrNot=""
        name={ detailedFood.strMeal }
        image={ detailedFood.strMealThumb }
      />
      <p
        data-testid="recipe-category"
      >
        { detailedFood.strCategory }
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
      <iframe src={ detailedFood.strYoutube } title="tutorial" data-testid="video" />
      <div className="recomendation-card">
        { recomendations.slice(0, six).map((drink, index) => (
          <Link
            to={ `/drinks/${drink.idDrink}` }
            key={ drink.idDrink }
            data-testid={ `${index}-recomendation-card` }
          >
            <DetailedCard
              key={ drink.idDrink }
              strMeal={ drink.strDrink }
              strMealThumb={ drink.strDrinkThumb }
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
          href={ `/foods/${id}/in-progress` }

        >
          Start Recipe
        </a>
      </button>
    </>
  );
}

export default FoodDetails;
