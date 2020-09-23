import { SimpleComponent } from 'components/component';
import { useObserver } from 'mobx-react';
import * as React from 'react';
import { useServices } from 'hooks/contexts';

export const ArticlePage = (props) => {
  return useObserver(() => (
    <>
      <h1>Welcome to Blog!</h1>
      {props.match.params.articleName}
    </>
  ))
}