
import * as React from 'react';
import { useServices } from 'hooks/contexts';
import { useObserver, useLocalStore } from 'mobx-react';
import { NavLink } from 'react-router-dom';

export const NavHeader = () => {
    const { wordpressService } = useServices();
    const state = useLocalStore(() => ({
        menu: null,
        loading: true
    }))
    React.useEffect(() => {
        wordpressService.getMenu().then((resp) => {
            state.menu = resp.data
            state.loading = false
        })
    }, [])
    return useObserver(() => (
        <header>
            {state.loading ? <div>Loading</div> :
                <div>
                    {
                        state.menu.map((menu) => {
                            let link = ""
                            menu.url.split('/').map((url, id) => {
                                if (id > 2 && url.length > 1) {
                                    link = link + "/" + url
                                }
                            })
                            return (
                                <NavLink to={link} key={menu.ID}>
                                    {menu.title}
                                </NavLink>
                            )
                        })
                    }
                </div>
            }
        </header>
    ))
}