import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Profile from '../pages/Profile'

export default (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path ='/login' component={Login}></Route>
    <Route exact path = '/signup' component={Signup}></Route>
    <Route exact path ='/profile' component={Profile}></Route>
  </Switch>
)