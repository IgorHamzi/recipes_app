import React, { useState, useContext } from 'react';
import requestAPI from '../services';
import GlobalContext from '../context/GlobalContext';

function SearchBar() {
  const { setMeals } = useContext(GlobalContext);
  const [option, setOption] = useState('');
  const [searchi, setSearchi] = useState('');

  const requestApiIngr = (ing) => {
    requestAPI.meals.ingredient(ing).then((food) => setMeals(food.meals));
  };

  const requestApiName = (name) => {
    requestAPI.meals.nameOrFirst12(name).then((food) => setMeals(food.meals));
  };

  const requestApiFirstletter = (name) => {
    requestAPI.meals.firstLetter(name).then((food) => setMeals(food.meals));
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
