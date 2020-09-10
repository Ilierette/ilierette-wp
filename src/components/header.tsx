import { useObserver } from 'mobx-react';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

export const NavHeader = () => {
    return useObserver(() => (
        <header>
            <NavLink to="/">Strona główna</NavLink>
        </header>
    ))
}