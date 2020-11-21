import React from 'react';
import ShopHeader from '../shop-header';
import CartPage from '../pages/cart-page';
import HomePage from '../pages/home-page';
import { Route, Switch } from 'react-router-dom';
import ShoppingCartTable from '../shopping-cart-table';
import './app.css';

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
      <ShoppingCartTable />
    </main>
  );
};

export default App;
