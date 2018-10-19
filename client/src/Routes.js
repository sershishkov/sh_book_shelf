import React from 'react';
import { Switch, Route }from 'react-router-dom';

import Home from './components/home/Home';
import BookView from './components/books';
import Layout from './hoc/Layout';
import Login from './containers/admin/Login';
import User from './components/admin';

import Auth from './hoc/Auth';


const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home,null)} />
        <Route path="/login" exact component={Auth(Login,false)} />
        <Route path="/user" exact component={Auth(User,true)} />
        <Route path="/books/:id" exact component={Auth(BookView)} />
      </Switch>
    </Layout>
  );
};

export default Routes;