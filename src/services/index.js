const fetchApi = (url, value) => {
  if (!value) {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => err);
  }
  if (value) {
    return fetch(url.concat(value))
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => err);
  }
};

const requestAPI = {
  drinks: {
    categories: () => fetchApi('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'),

    nameOrFirst12: (data) => fetchApi('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=', data),

    ingredient: (data) => fetchApi('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=', data),

    firstLetter: (data) => fetchApi('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=', data),

    category: (data) => fetchApi('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=', data),

    randomDrinks: () => fetchApi('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
  },

  meals: {
    categories: () => fetchApi('https://www.themealdb.com/api/json/v1/1/list.php?c=list'),

    nameOrFirst12: (data) => fetchApi('https://www.themealdb.com/api/json/v1/1/search.php?s=', data),

    ingredient: (data) => fetchApi('https://www.themealdb.com/api/json/v1/1/filter.php?i=', data),

    firstLetter: (data) => fetchApi('https://www.themealdb.com/api/json/v1/1/search.php?f=', data),

    category: (data) => fetchApi('https://www.themealdb.com/api/json/v1/1/filter.php?c=', data),

    nationality: (data) => fetchApi('https://www.themealdb.com/api/json/v1/1/filter.php?a=', data),

    nationalities: () => fetchApi('https://www.themealdb.com/api/json/v1/1/list.php?a=list'),

    randomFood: () => fetchApi('https://www.themealdb.com/api/json/v1/1/random.php'),
  },
};

export default requestAPI;
