import React, { useState, useContext } from 'react';
import requestAPI from '../services';
import GlobalContext from '../context/GlobalContext';

function SearchBar() {
  const { setMeals, setDrinks } = useContext(GlobalContext);
  const [option, setOption] = useState('');
  const [searchi, setSearchi] = useState('');

  const setMeals2 = (food) => {
    if (food.meals !== null) { setMeals(food.meals); }
    if (food.meals == null) {
      console.log('não ecdfdf');
      const gg = 'Sorry, we haven';
      const sobr = 't found any recipes for these filters.';
      global.alert(`${gg + sobr}`);
    }
  };

  const setDrinks2 = (food) => {
    if (food.drinks !== null) { setDrinks(food.drinks); }
    if (food.drinks == null) {
      console.log('não ecdfdf');
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  };

  const requestApiIngr = (ing) => {
    requestAPI.meals.ingredient(ing).then((food) => setMeals2(food));
    requestAPI.drinks.ingredient(ing).then((data) => setDrinks2(data));
  };

  const requestApiName = (name) => {
    requestAPI.meals.nameOrFirst12(name).then((food) => setMeals2(food));
    requestAPI.drinks.nameOrFirst12(name).then((data) => setDrinks2(data));
  };

  const requestApiFirstletter = (name) => {
    requestAPI.meals.firstLetter(name).then((food) => setMeals2(food.meals));
    requestAPI.drinks.firstLetter(name).then((data) => setDrinks2(data));
  };

  const pressBut = () => {
    console.log(searchi.length);
    if (option === 'name') { requestApiName(searchi); }
    if (option === 'ingredient') { requestApiIngr(searchi); }
    if (option === 'first-letter' && searchi.length <= 1) {
      requestApiFirstletter(searchi);
    }
    if (option === 'first-letter' && searchi.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    }
  };

  return (
    <section>
      <input
        type="text"
        data-testid="search-input"
        onChange={ (e) => setSearchi(e.target.value) }
      />
      <div>
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          value="ingredient"
          name="options"
          onChange={ (e) => setOption(e.target.value) }
        />
        Ingredient
        <input
          type="radio"
          data-testid="name-search-radio"
          value="name"
          name="options"
          onChange={ (e) => setOption(e.target.value) }
        />
        Name
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          value="first-letter"
          name="options"
          onChange={ (e) => setOption(e.target.value) }
        />
        First letter
        <button
          type="button"
          data-testid="exec-search-btn"
          value="teste"
          onClick={ () => pressBut() }
        >
          Search
        </button>
      </div>
    </section>
  );
}

export default SearchBar;
