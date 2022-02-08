/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import requestAPI from '../services';
import GlobalContext from '../context/GlobalContext';
import DrinkIngredientCard from '../components/DrinkIngredientCard';

function ExploreDrinksIngredients() {
  const { drinks, setDrinks } = useContext(GlobalContext);
  useEffect(() => {
    requestAPI.drinks.allIngredients().then((data) => setDrinks(data.drinks));
  }, []);

  const twelve = 12;

  return (
    <div>
      <Header title="Explore Ingredients" />
      { drinks.slice(0, twelve).map((food, index) => (
        <DrinkIngredientCard
          key={ food.idIngredient1 }
          strIngredient={ food.strIngredient1 }
          index={ index }
        />
      )) }
      <Footer />
    </div>
  );
}

export default ExploreDrinksIngredients;
