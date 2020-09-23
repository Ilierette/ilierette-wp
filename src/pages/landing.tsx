import { SimpleComponent } from 'components/component';
import { useObserver } from 'mobx-react';
import * as React from 'react';
import { useServices } from 'hooks/contexts';

export const LandingPage = () => {
  const { wordpressService } = useServices();
  React.useEffect(() => {
    wordpressService.getMenu().then((resp) => {
      console.log(resp.data)
    })
  })

  return useObserver(() => (
    <>
      <h1>Welcome to Lading!</h1>


      <SimpleComponent />

    </>
  ))
}