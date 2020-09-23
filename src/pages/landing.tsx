import * as React from 'react';
import { useObserver } from 'mobx-react';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
  return useObserver(() => (
    <>
      <h1>Welcome to Lading!</h1>
      <Link to='/blog/'>Recent blog posts</Link>
    </>
  ))
}