
import * as React from 'react';
import { useStores } from 'hooks/contexts';
import { useObserver } from 'mobx-react';
import { NavLink } from 'react-router-dom';

export const NavHeader = () => {
    const { globalCtx } = useStores();
    return useObserver(() => (
        <header>
            <div className="top-header">
                <div className="container">
                    <div className="row  align-items-center">
                        <div className="col-md-3">
                            <div className="social-links">
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                    <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="brand-name text-center">
                                <a href="index.html">
                                    <h1>Ilierette</h1>
                                    <span>Dancing nerd</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="search-wrapper">
                                <div className="search-icon">
                                    <button className="open-search-btn"><i className="fa fa-search"></i></button>
                                </div>
                                <div className="sidebar-icon">
                                    <button className="sidebar-btn"> <i className="fas fa-ellipsis-v"></i></button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="kavya-navbar" id="sticky-top">
                <div className="container">
                    <nav className="nav-menu-wrapper">
                        <span className="navbar-toggle" id="navbar-toggle">
                            <i className="fas fa-bars"></i>
                        </span>
                        <div className="sticky-logo">
                            <a href="index.html">
                                <p>Ilierette</p>
                            </a>
                        </div>
                        <ul className="nav-menu ml-auto mr-auto" id="nav-menu-toggle">
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
                            <li className="nav-item"><a href="index.html" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Categories <span className="arrow-icon"> <span
                                className="left-bar"></span>
                                <span className="right-bar"></span></span>
                            </a>
                                <ul className="drop-menu">
                                    <li className="drop-menu-item"><a href="archive-right-sidebar.html">Food</a></li>
                                    <li className="drop-menu-item"><a href="archive-right-sidebar.html">Technology</a></li>
                                    <li className="drop-menu-item"><a href="archive-right-sidebar.html">Fashion</a></li>
                                    <li className="drop-menu-item"><a href="archive-right-sidebar.html">Women</a></li>
                                    <li className="drop-menu-item"><a href="archive-right-sidebar.html">Lifestyle</a></li>
                                </ul>
                            </li>
                            <li className="nav-item drop-arrow"><a href="#" className="nav-link">Pages <span className="arrow-icon"> <span
                                className="left-bar"></span>
                                <span className="right-bar"></span></span></a>
                                <ul className="drop-menu">
                                    <li className="drop-menu-item"><a href="index.html">Home Page 1</a></li>
                                    <li className="drop-menu-item"><a href="index2.html">Home Page 2</a></li>
                                    <li className="drop-menu-item"><a href="index3.html">Home Page 3</a></li>
                                    <li className="drop-menu-item"><a href="404.html">404 error page with image</a></li>
                                    <li className="drop-menu-item"><a href="404-text.html">404 error page text only</a></li>
                                </ul>
                            </li>
                            <li className="nav-item drop-arrow"><a href="#" className="nav-link">Layout <span className="arrow-icon"> <span
                                className="left-bar"></span>
                                <span className="right-bar"></span></span></a>
                                <ul className="drop-menu">
                                    <li className="drop-menu-item"><a href="archive-right-sidebar.html">Archive Right sidebar</a></li>
                                    <li className="drop-menu-item"><a href="archive-left-sidebar.html">Archive Left sidebar</a></li>
                                    <li className="drop-menu-item"><a href="archive-no-sidebar.html">Archive No sidebar</a></li>
                                    <li className="drop-menu-item"><a href="single-no-sidebar.html">Single Page No sidebar</a></li>
                                    <li className="drop-menu-item"><a href="single-right-sidebar.html">Single Page Right sidebar</a></li>
                                    <li className="drop-menu-item"><a href="search.html">Search Page</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                            <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                        </ul>
                        <div className="sticky-search">
                            <div className="search-wrapper">
                                <div className="search-icon">
                                    <button className="open-search-btn"><i className="fa fa-search"></i></button>
                                </div>
                                <div className="sidebar-icon">
                                    <button className="sidebar-btn"> <i className="fas fa-ellipsis-v"></i></button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                    </ul>
                </div>

            </nav>
        </header>
    ))
}