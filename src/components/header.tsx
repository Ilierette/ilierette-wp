
import * as React from 'react';
import { useStores } from 'hooks/contexts';
import { useObserver } from 'mobx-react';
import { NavLink } from 'react-router-dom';

export const NavHeader = () => {
    const { globalCtx } = useStores();
    return useObserver(() => (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {
                            globalCtx.menu.map((menu) => {
                                let link = ""
                                menu.url.split('/').map((url, id) => {
                                    if (id > 2 && url.length > 1) {
                                        link = link + "/" + url
                                    }
                                })
                                return (
                                    <li className="nav-item">
                                        <NavLink className={"nav-link"} to={link} key={menu.ID}>
                                            {menu.title}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            
        </nav>
    ))
}