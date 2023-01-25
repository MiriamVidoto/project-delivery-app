import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/products" component={ Products } />
    </Switch>
  );
}
export default App;
