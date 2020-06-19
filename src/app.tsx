import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./styles.scss";
import ViewHome from './views/Home';
import ViewButton from './views/Button';
import "ini-design/dist/ini.scss"
export default () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ViewHome } />
        <Route exact path="/documentation/component/button" component={ ViewButton } />
      </Switch>
    </BrowserRouter>
  )
}