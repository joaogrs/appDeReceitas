import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Foods from './Pages/Foods';
import Drinks from './Pages/Drinks';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeDetails from './Pages/RecipeDetails';
import RecipeInProgress from './Pages/RecipeInProgress';
import DoneRecipes from './Pages/DoneRecipes';
import DrinkDetails from './Pages/DrinkDetails';
import DrinkInProgress from './Pages/DrinkInProgress';
import Explore from './Pages/Explore';
import ExploreDrink from './Pages/ExploreDrinks';
import ExploreDrinkIngredients from './Pages/ExploreDrinksIngredients';
import ExploreNationalities from './Pages/ExploreNationalities';
import ExploreRecipe from './Pages/ExploreRecipe';
import ExploreRecipeIngredients from './Pages/ExploreRecipeIngredients';
import FavoritesRecipes from './Pages/FavoritesRecipes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/foods/:id" component={ RecipeDetails } />
        <Route exact path="/drinks/:id" component={ DrinkDetails } />
        <Route exact path="/foods/:id/in-progress" component={ RecipeInProgress } />
        <Route exact path="/drinks/:id/in-progress" component={ DrinkInProgress } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ ExploreRecipe } />
        <Route exact path="/explore/drinks" component={ ExploreDrink } />
        <Route
          exact
          path="/explore/foods/ingredients"
          component={ ExploreRecipeIngredients }
        />
        <Route
          exact
          path="/explore/drinks/ingredients"
          component={ ExploreDrinkIngredients }
        />
        <Route
          exact
          path="/explore/foods/nationalities"
          component={ ExploreNationalities }
        />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoritesRecipes } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
// oi
