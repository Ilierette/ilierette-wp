import { NavHeader } from 'components/header';
import { MainPage } from 'pages';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import "scss/main.scss";
require('offline-plugin/runtime').install();

const App = () => {
  return (
    <BrowserRouter>
      <NavHeader />

      <Route path="/" exact component={MainPage} />

    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
