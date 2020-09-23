import { SimpleComponent } from 'components/component';
import { useObserver } from 'mobx-react';
import * as React from 'react';
import { useServices } from 'hooks/contexts';
import { Link } from 'react-router-dom';

export const BlogPage = () => {
  return useObserver(() => (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Welcome to Blog!</h1>
          <div>All posts</div>
          <Link to='/'>Go back to landing</Link>
        </div>
      </div>
    </div>
  ))
}