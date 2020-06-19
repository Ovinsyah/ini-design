import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './views/Home'
export default () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  )
}