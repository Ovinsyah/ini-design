import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./styles.scss";
import ViewHome from './views/Home';
import ViewReactButton from './views/React/Button';
import ViewReactInput from './views/React/Input';
import ViewIntroduction from './views/Introduction';

import ViewInstallation from './views/React/Installation';

import "ini-design/dist/ini.scss";
// import "ini-design/style/ini.scss";

export default () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={ViewHome} />
        <Route exact={true} path="/react/introduction" component={ViewIntroduction} />
        <Route exact={true} path="/react/installation" component={ViewInstallation} />
        <Route exact={true} path="/react/component/button" component={ViewReactButton} />
        <Route exact={true} path="/react/component/input" component={ViewReactInput} />

        <Route exact={true} path="/inicss/introduction" component={() => ViewIntroduction({isInicss: true})} />
      </Switch>
    </BrowserRouter>
  );
};