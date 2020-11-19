import React from 'react';
import CartPage from '../pages/cart-page';
import HomePage from '../pages/home-page';
import { Route, Switch } from 'react-router-dom';
import './app.css';

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/cart" component={CartPage} />
    </Switch>
  );
};

export default App;
