import { SimpleComponent } from 'components/component';
import { useStores } from 'contexts';
import { useObserver } from 'mobx-react';
import * as React from 'react';
const axios = require('axios');

export const MainPage =() => {
  const { globalCtx } = useStores();

  React.useEffect(()=>{
    axios.get('http://a.ilierette.com/wp-json/wp/v2/posts').then((resp)=>{
      console.log(resp.data)
    })
  })

  return useObserver(() => (
    <>
      <h1>Welcome to MainPage!</h1>
      <button onClick={globalCtx.changeColor}>Toggle color!!!!!!!!!!</button>

      <SimpleComponent />

    </>
  ))
}