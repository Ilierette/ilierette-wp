import { SimpleComponent } from 'components/component';
import { useObserver } from 'mobx-react';
import * as React from 'react';
import { useServices } from 'hooks/contexts';

export const CategoryPage = (props) => {
  return useObserver(() => (
    <>
      <h1>Welcome to Category!</h1>
      {props.match.params.categoryName}
    </>
  ))
}