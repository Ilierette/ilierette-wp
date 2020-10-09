import * as React from 'react';
import { useObserver } from 'mobx-react';
import { Link } from 'react-router-dom';
import "scss/landing.scss";

export const LandingPage = () => {
  return useObserver(() => (
    <div className="landing">
      <div className="container">
        <div className="card">
          <h2>Stream</h2>
          <i className="fas fa-arrow-right"></i>
          <p>Dancing nerd</p>
          <div className="pic">
            <img src={require('../images/card-1.jpg')} />
          </div>
          <div className="social">
            <a target="/blank" href="https://www.instagram.com/ilierette/"><i className="fab fa-instagram"></i></a>
            <a target="/blank" href="https://discord.com/invite/RHfP7tj"><i className="fab fa-discord"></i></a>
            <a target="/blank" href="https://www.twitch.tv/ilieret"><i className="fab fa-twitch"></i></a>
            <a target="/blank" href="https://www.youtube.com/channel/UCNkgXz2HcVk4KGMRnpD4rnQ/videos"><i className="fab fa-youtube"></i></a>
            <a target="/blank" href="https://facebook.com/ilierette/"><i className="fab fa-facebook-f"></i></a>
          </div>
          <a target="/blank" className="button" href="https://www.twitch.tv/ilieret"></a>
        </div>
        <div className="card">
          <h2>Art</h2>
          <i className="fas fa-arrow-right"></i>
          <p>Digital artist</p>
          <div className="pic">
            <img src={require('../images/card-2.jpg')} />
          </div>
          <div className="social">
            <a target="/blank" href="https://www.instagram.com/ilierette.art/"><i className="fab fa-instagram"></i></a>
            <a target="/blank" href="https://www.artstation.com/ilierette"><i className="fab fa-artstation"></i></a>
          </div>
          <a target="/blank" className="button"  href="https://www.artstation.com/ilierette"></a>
        </div>
        <div className="card">
          <h2>React.js</h2>
          <i className="fas fa-arrow-right"></i>
          <p>Developer</p>
          <div className="pic">
            <img src={require('../images/card-3.png')} />
          </div>
          <div className="social">
            <a target="/blank" href="https://www.linkedin.com/in/ilierette/"><i className="fab fa-linkedin"></i></a>
            <a target="/blank" href="https://www.instagram.com/ilierette.dev/"><i className="fab fa-instagram"></i></a>
            <a target="/blank" href="https://github.com/Ilierette"><i className="fab fa-github"></i></a>
            <a target="/blank" href="https://twitter.com/ilierette"><i className="fab fa-twitter"></i></a>
          </div>
          <a target="/blank" className="button" href="https://ilierette.github.io/ilierette/"></a>
        </div>
      </div>
    </div>

  ))
}