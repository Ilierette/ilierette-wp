import { NavHeader } from 'components/header';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "scss/main.scss";
import { LandingPage } from 'pages/landing';
import { BlogPage } from 'pages/blog';
import { Page } from 'pages/page';
import { CategoryPage } from 'pages/category';
import { ArticlePage } from 'pages/article';
require('offline-plugin/runtime').install();

const App = () => {
  return (
    <BrowserRouter>
      <NavHeader />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/article/:articleName" component={ArticlePage} />
        <Route path="/category/:categoryName" component={CategoryPage} />
        <Route path="/:pageName" component={Page} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
