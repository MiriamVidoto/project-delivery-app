import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AdminManage from './pages/AdminManage';
import CheckoutCustomer from './pages/CheckoutCustomer';
import CustomerOrderDetails from './pages/CustomerOrderDetails';
import CustomerOrders from './pages/CustomerOrders';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import SellerOrderDetails from './pages/SellerOrderDetails';
import SellerOrders from './pages/SellerOrders';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route
        exact
        path="/customer/products"
        component={ Products }
      />
      <Route exact path="/customer/orders" component={ CustomerOrders } />
      <Route exact path="/customer/orders/:id" component={ CustomerOrderDetails } />
      <Route exact path="/seller/orders" component={ SellerOrders } />
      <Route exact path="/seller/orders/:id" component={ SellerOrderDetails } />
      <Route exact path="/admin/manage" component={ AdminManage } />
      <Route exact path="/customer/checkout" component={ CheckoutCustomer } />
    </Switch>
  );
}
export default App;
