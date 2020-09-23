import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LandingPage } from 'pages/landing';
import { BlogPage } from 'pages/blog';
import { ArticlePage } from 'pages/article';
import { CategoryPage } from 'pages/category';
import { Page } from 'pages/page';
import { useEffect } from 'react';
import { useServices, useStores } from 'hooks/contexts';
import { useObserver } from 'mobx-react';

require('offline-plugin/runtime').install();

const App = () => {
  const { wordpressService } = useServices();
  const { globalCtx } = useStores();
  useEffect(() => {
    wordpressService.getMenu().then((resp) => {
      globalCtx.menu = resp.data
      globalCtx.loading = false
    })
  }, [])
  return useObserver(() => (
    <>
      {globalCtx.loading ? <div>Loading</div> :
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/article/:articleName" component={ArticlePage} />
            <Route path="/category/:categoryName" component={CategoryPage} />
            <Route path="/:pageName" component={Page} />
          </Switch>
        </BrowserRouter>
      }
    </>
  ))
}

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
