import React from 'react';
import { Switch, Route }from 'react-router-dom';

import Home from './components/home/Home';
import BookView from './components/books';
import Layout from './hoc/Layout';
import Login from './containers/admin/Login';

import Auth from './hoc/Auth';


const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home)} />
        <Route path="/login" exact component={Login} />
        <Route path="/books/:id" exact component={BookView} />
      </Switch>
    </Layout>
  );
};

export default Routes;