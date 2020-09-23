import { SimpleComponent } from 'components/component';
import { useObserver } from 'mobx-react';
import * as React from 'react';
import { useServices } from 'hooks/contexts';
import { Link } from 'react-router-dom';

export const Page = (props) => {
  return useObserver(() => (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Welcome to Page!</h1>
          <div>{props.match.params.pageName}</div>
          <Link to='/'>Go back to landing</Link>
        </div>
      </div>
    </div>
  ))
}