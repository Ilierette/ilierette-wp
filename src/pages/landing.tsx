import { SimpleComponent } from 'components/component';
import * as React from 'react';
import { useServices } from 'hooks/contexts';
import { useObserver } from 'mobx-react';

export const LandingPage = () => {
  return useObserver(() => (
    <>
      <h1>Welcome to Lading!</h1>


      <SimpleComponent />

    </>
  ))
}