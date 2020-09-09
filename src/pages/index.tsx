import { SimpleComponent } from 'components/component';
import { useStores } from 'contexts';
import { useObserver } from 'mobx-react';
import * as React from 'react';

export const MainPage =() => {
  const { globalCtx } = useStores();

  return useObserver(() => (
    <>
      <h1>Welcome to MainPage!</h1>
      <button onClick={globalCtx.changeColor}>Toggle color!!!!!!!!!!</button>

      <SimpleComponent />

    </>
  ))
}