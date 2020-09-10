import { SimpleComponent } from 'components/component';
import { useObserver } from 'mobx-react';
import * as React from 'react';
import { useServices } from 'hooks/contexts';

export const MainPage =() => {
  const {wordpressService} = useServices();
  React.useEffect(()=>{
    wordpressService.getPages().then((resp)=>{
      console.log(resp.data)
    })
  })

  return useObserver(() => (
    <>
      <h1>Welcome to MainPage!</h1>
      

      <SimpleComponent />

    </>
  ))
}