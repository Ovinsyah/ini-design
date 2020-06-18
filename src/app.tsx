import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./styles.scss";
import ViewHome from './views/Home';
export default () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ViewHome } />
      </Switch>
    </BrowserRouter>
  )
}