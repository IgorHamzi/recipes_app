/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import requestAPI from '../services';
import GlobalContext from '../context/GlobalContext';
import FoodIngredientCard from '../components/FoodIngredientCard';

function ExploreFoodsIngredients() {
  const { meals, setMeals } = useContext(GlobalContext);
  useEffect(() => {
    requestAPI.meals.allIngredients().then((data) => setMeals(data.meals));
  }, []);

  const twelve = 12;

  return (
    <div>
      <Header title="Explore Ingredients" haveSearch />
      { meals.slice(0, twelve).map((food, index) => (
        <FoodIngredientCard
          key={ food.idIngredient }
          strIngredient={ food.strIngredient }
          index={ index }
        />
      )) }
      <Footer />
    </div>
  );
}

export default ExploreFoodsIngredients;
