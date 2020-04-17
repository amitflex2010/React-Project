import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import React from 'react';
import Home from './components/Home/Home';
import Articles from './components/Articles/Articles';
import NavigationItems from './components/NavigationItems/NavigationItems';
import FAQS from './components/FAQ/FAQ';

import classes from './App.module.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={classes.NavContainer} >
          <NavigationItems />
        </div>
        <Switch>
          <Route path="/faqs" component={FAQS} />
          <Route path="/help-links" component={Articles} />
          <Route path="/" component={Home} />
        </Switch>
        <Redirect to="/" />
      </BrowserRouter>
    </>
  )
}

export default App;