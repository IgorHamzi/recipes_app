/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import requestAPI from '../services';
import RenderCard from '../components/RenderCard';
import GlobalContext from '../context/GlobalContext';

function Foods() {
  const { meals, setMeals } = useContext(GlobalContext);
  useEffect(() => {
    requestAPI.meals.nameOrFirst12().then((food) => setMeals(food.meals));
  }, []);

  const twelve = 12;
  console.log(meals);

  return (
    <div>
      <Header title="Foods" haveSearch />
      { meals.slice(0, twelve).map((food, index) => (
        <Link to={ `/foods/${food.idMeal}` } key={ food.idMeal }>
          <RenderCard
            key={ food.idMeal }
            strMeal={ food.strMeal }
            strMealThumb={ food.strMealThumb }
            index={ index }
          />
        </Link>
      )) }
      <Footer />
      { meals.length === 1 && <Redirect to={ `/foods/${meals[0].idMeal}` } />}
    </div>
  );
}

export default Foods;
