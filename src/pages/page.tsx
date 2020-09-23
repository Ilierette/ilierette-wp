import { SimpleComponent } from 'components/component';
import { useObserver } from 'mobx-react';
import * as React from 'react';
import { useServices } from 'hooks/contexts';

export const Page = (props) => {
  return useObserver(() => (
    <>
      <h1>Welcome to Page!</h1>
      {props.match.params.pageName}
    </>
  ))
}