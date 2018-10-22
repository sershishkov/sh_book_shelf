import React from 'react';
import { Switch, Route }from 'react-router-dom';

import Home from './components/home/Home';
import BookView from './components/books';
import Layout from './hoc/Layout';
import Login from './containers/admin/Login';
import User from './components/admin';
import AddReview from './containers/admin/AddRewiew';
import UserPosts from './components/admin/UserPosts';
import EditReview from './containers/admin/EditBook';
import Register from './containers/admin/Register';
import Logout from './components/admin/Logout';

import Auth from './hoc/Auth';


const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home,null)} />
        <Route path="/login" exact component={Auth(Login,false)} />
        <Route path="/user/logout" exact component={Auth(Logout,true)} />
        <Route path="/user" exact component={Auth(User,true)} />

        <Route path="/user/register" exact component={Auth(Register,true)} />
        <Route path="/user/add" exact component={Auth(AddReview,true)} />
        <Route path="/user/edit-post/:id" exact component={Auth(EditReview,true)} />
        <Route path="/books/:id" exact component={Auth(BookView,null)} />
        <Route path="/user/user-reviews" exact component={Auth(UserPosts,true)} />

      </Switch>
    </Layout>
  );
};

export default Routes;