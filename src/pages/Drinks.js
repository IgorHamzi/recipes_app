/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import requestAPI from '../services';
import RenderCard from '../components/RenderCard';
import GlobalContext from '../context/GlobalContext';

function Drinks() {
  const { drinks, setDrinks } = useContext(GlobalContext);
  useEffect(() => {
    requestAPI.drinks.nameOrFirst12().then((data) => setDrinks(data.drinks));
  }, []);

  const twelve = 12;

  return (
    <div>
      <Header title="Drinks" haveSearch />
      { drinks.slice(0, twelve).map((drink, index) => (
        <Link to={ `/drinks/${drink.idDrink}` } key={ drink.idDrink }>
          <RenderCard
            key={ drink.idDrink }
            strMeal={ drink.strDrink }
            strMealThumb={ drink.strDrinkThumb }
            index={ index }
          />
        </Link>
      )) }
      <Footer />
    </div>
  );
}

export default Drinks;
