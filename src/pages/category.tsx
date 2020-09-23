import { useObserver } from 'mobx-react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { NavHeader } from 'components/header';
import "scss/main.scss";

export const CategoryPage = (props) => {
  return useObserver(() => (
    <>
      <NavHeader />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Welcome to Category!</h1>
            <div>{props.match.params.categoryName}</div>
            <Link to='/'>Go back to landing</Link>
          </div>
        </div>
      </div>
    </>
  ))
}