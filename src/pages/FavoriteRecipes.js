import React from 'react';
import FavoriteCard from '../components/FavoriteCard';
import Header from '../components/Header';

function FavoriteRecipes() {
  const allFoodsFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));// array das comidas favoritadas

  return (
    <div>
      <Header title="Favorite Recipes" haveSearch={ false } />
      <div>Favorite recipes TESTE</div>
      <div>
        { allFoodsFavorite.map((item, index) => (<FavoriteCard
          key={ item.id }
          image={ item.image }
          name={ item.name }
          category={ item.category }
          nationality={ item.nationality }
          alcoholicOrNot={ item.alcoholicOrNot }
          index={ index }
          id={ item.id }
        />))}
      </div>
    </div>
  );
}

export default FavoriteRecipes;
// const { image, name, category, nationality, alcoholicOrNot, id } = props;
