import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';
import FoodDetails from '../pages/FoodDetails';
import DrinkDetails from '../pages/DrinkDetails';
import FoodInProgress from '../pages/FoodInProgress';
import DrinkInProgress from '../pages/DrinkInProgress';
import Explore from '../pages/Explore';
import ExploreFoods from '../pages/ExploreFoods';
import ExploreDrinks from '../pages/ExploreDrinks';
import ExploreFoodsIngredients from '../pages/ExploreFoodsIngredients';
import ExploreDrinksIngredients from '../pages/ExploreDrinksIngredients';
import ExploreFoodsNationalities from '../pages/ExploreFoodsNationalities';
import ExploreDrinksNationalities from '../pages/ExploreDrinksNationalities';
import Profile from '../pages/Profile';
import DoneRecipes from '../pages/DoneRecipes';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import GlobalContext from '../context/GlobalContext';

export default function Routes() {
  const { redirect } = useContext(GlobalContext);
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/">
            {redirect ? <Redirect to={ { pathname: '/foods' } } /> : <Login />}
          </Route>
          <Route exact path="/foods/:id" component={ FoodDetails } />
          <Route exact path="/drinks/:id" component={ DrinkDetails } />
          <Route
            exact
            path="/foods/:id/in-progress"
            component={ FoodInProgress }
          />
          <Route
            exact
            path="/drinks/:id/in-progress"
            component={ DrinkInProgress }
          />
          <Route exact path="/explore" component={ Explore } />
          <Route exact path="/explore/foods" component={ ExploreFoods } />
          <Route exact path="/explore/drinks" component={ ExploreDrinks } />
          <Route
            exact
            path="/explore/foods/ingredients"
            component={ ExploreFoodsIngredients }
          />
          <Route
            exact
            path="/explore/drinks/ingredients"
            component={ ExploreDrinksIngredients }
          />
          <Route
            exact
            path="/explore/foods/nationalities"
            component={ ExploreFoodsNationalities }
          />
          <Route
            exact
            path="/explore/drinks/nationalities"
            component={ ExploreDrinksNationalities }
          />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
          <Route exact path="/foods" component={ Foods } />
          <Route exact path="/drinks" component={ Drinks } />
        </Switch>
      </main>
    </div>
  );
}
