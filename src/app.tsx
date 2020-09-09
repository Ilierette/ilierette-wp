import { NavHeader } from 'components/header';
import { useStores } from 'contexts';
import { MainPage } from 'pages';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import "scss/main.scss";
require('offline-plugin/runtime').install();

const App = () => {
  const { globalCtx } = useStores();

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
