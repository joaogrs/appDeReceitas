import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Perfil from './Pages/Perfil';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './Context/myProvider';
import Foods from './Pages/Foods';
import Drinks from './Pages/Drinks';
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
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/profile" component={ Perfil } />
          <Route path="/foods" component={ Foods } />
          <Route path="/drinks" component={ Drinks } />
          <Route path="/foods/:id" component={ RecipeDetails } />
          <Route path="/drinks/:id" component={ DrinkDetails } />
          <Route path="/foods/:id/in-progress" component={ RecipeInProgress } />
          <Route path="/drinks/:id/in-progress" component={ DrinkInProgress } />
          <Route exact path="/explore" component={ Explore } />
          <Route exact path="/explore/foods" component={ ExploreRecipe } />
          <Route exact path="/explore/drinks" component={ ExploreDrink } />
          <Route
            path="/explore/foods/ingredients"
            component={ ExploreRecipeIngredients }
          />
          <Route
            path="/explore/drinks/ingredients"
            component={ ExploreDrinkIngredients }
          />
          <Route path="/explore/foods/nationalities" component={ ExploreNationalities } />
          <Route path="/done-recipes" component={ DoneRecipes } />
          <Route path="/favorite-recipes" component={ FavoritesRecipes } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
