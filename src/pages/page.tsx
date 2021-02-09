import { useLocalStore, useObserver } from 'mobx-react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { NavHeader } from 'components/header';
import "scss/main.scss";
import { useServices } from 'hooks/contexts';
import parse from 'html-react-parser';


export const Page = (props) => {
  const { wordpressService } = useServices();
  const state = useLocalStore(() => ({
    content: null
  }))
  React.useEffect(() => {
    wordpressService.getPages(props.match.params.pageName).then((resp) => {
      state.content = resp.data[0];
      console.log(resp.data)
    })
  }, [props])
  return useObserver(() => (
    <>
      <NavHeader />
      {
        state.content ?
          <div className="row">
            <div className="col-12">
              <h1>{state.content.title.rendered}</h1>
              <div>{parse(state.content.content.rendered)}</div>
            </div>
          </div> : <div className="loading"><i className="fas fa-atom fa-spin fa-10x"></i></div>
      }
    </>
  ))
}