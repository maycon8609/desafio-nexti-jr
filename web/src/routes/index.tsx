import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Customer from '../pages/Customer';
import CustomersList from '../pages/Customer/List';
import CustomerEdited from '../pages/Customer/Edited';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/customers" component={Customer} />
      <Route path="/customers-list" component={CustomersList} />
      <Route path="/customer-edited/:id" component={CustomerEdited} />
    </Switch>
  </BrowserRouter>
);

export default Routes;