/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import requestAPI from '../services';
import RenderCard from '../components/RenderCard';
import GlobalContext from '../context/GlobalContext';

function Drinks() {
  const { drinks, setDrinks, categoryD, setCategoryD,
    setDefcategoryD } = useContext(GlobalContext);
  useEffect(() => {
    requestAPI.drinks.nameOrFirst12().then((data) => setDrinks(data.drinks));
    requestAPI.drinks.categories().then((food) => setCategoryD(food.drinks));
  }, []);

  const twelve = 12;
  const twelve2 = 5;
  console.log(drinks);

  return (
    <div>
      <Header title="Drinks" haveSearch />
      { categoryD.slice(0, twelve2).map((w, i) => (
        <button
          key={ i }
          type="button"
          data-testid={ `${w.strCategory}-category-filter` }
          value={ w.strCategory }
          onClick={ (e) => setDefcategoryD(e.target.value) }
        >
          {w.strCategory}
        </button>
      )) }
      { drinks.slice(0, twelve).filter(() => true).map((drink, index) => (
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
      { drinks.length === 1 && <Redirect to={ `/drinks/${drinks[0].idDrink}` } />}
    </div>
  );
}

export default Drinks;
