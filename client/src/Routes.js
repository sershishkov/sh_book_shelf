import React from 'react';
import { Switch, Route }from 'react-router-dom';

import Home from './components/home/Home';
import BookView from './components/books';
import Layout from './hoc/Layout';
import Login from './containers/admin/Login';


const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/books/:id" exact component={BookView} />
      </Switch>
    </Layout>
  );
};

export default Routes;