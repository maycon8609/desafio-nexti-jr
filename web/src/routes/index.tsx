import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Customer from '../pages/Customers';
import CustomersList from '../pages/Customers/List';
import CustomerEdited from '../pages/Customers/Edited';
import Products from '../pages/Products';
import ProductsList from '../pages/Products/List';
import ProductsEdited from '../pages/Products/Edited';
import SelectCustomerOrder from '../pages/Orders/SelectCustomer';
import SelectProductsOrder from '../pages/Orders/SelectProducts';
import OrdersList from '../pages/Orders/List';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/customers" component={Customer} />
      <Route path="/customers-list" component={CustomersList} />
      <Route path="/customer-edited/:id" component={CustomerEdited} />

      <Route path="/products" component={Products} />
      <Route path="/products-list" component={ProductsList} />
      <Route path="/product-edited/:id" component={ProductsEdited} />

      <Route path="/order" exact component={SelectCustomerOrder} />
      <Route path="/order/:id" component={SelectProductsOrder} />
      <Route path="/orders-list" component={OrdersList} />
    </Switch>
  </BrowserRouter>
);

export default Routes;