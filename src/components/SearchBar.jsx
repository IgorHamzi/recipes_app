import React from 'react';

function SearchBar() {
  return (
    <section>
      <input
        type="text"
        data-testid="search-input"
      />
      <div>
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          value="ingredient"
          name="options"
        />
        Ingredient
        <input
          type="radio"
          data-testid="name-search-radio"
          value="name"
          name="options"
        />
        Name
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          value="first-letter"
          name="options"
        />
        First letter
        <button
          type="button"
          data-testid="exec-search-btn"
          value="teste"
        >
          Search
        </button>
      </div>
    </section>
  );
}

export default SearchBar;
