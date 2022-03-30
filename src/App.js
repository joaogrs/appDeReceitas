import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Perfil from './Pages/Perfil';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './Context/myProvider';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/profile" component={ Perfil } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
// oi
