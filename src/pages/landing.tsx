import * as React from 'react';
import { useObserver } from 'mobx-react';
import { Link } from 'react-router-dom';
import "scss/landing.scss";

export const LandingPage = () => {
  return useObserver(() => (
    <div className="landing-container">
      <div className="card mx-auto">
        <div className="card-body">
          <h1>Ilierette</h1>
          <div className="description mb-4">Dancing nerd | Stage girl <br/> Digital artist | React.js developer</div>
          <img src={require("../images/avatar.jpg")} className="card-img-inner" />
          <div className="socials">
            <a target="/blank" href="https://www.twitch.tv/ilieret" className="btn btn-primary social-button">
              <div><img src={require('../images/icons/twitch.svg')} className="btn-icon mr-3" /></div>
              <div>Watch stream</div>
            </a>
            <a target="/blank" href="https://www.youtube.com/channel/UCNkgXz2HcVk4KGMRnpD4rnQ/videos" className="btn btn-primary"><img src={require('../images/icons/youtube.svg')} className="btn-icon" /></a>
          </div>
          <div className="socials">
            <a target="/blank" href="https://www.instagram.com/ilierette/" className="btn btn-primary"><img src={require('../images/icons/instagram.svg')} className="btn-icon" /></a>
            <a target="/blank" href="https://www.instagram.com/ilierette.art/" className="btn btn-primary social-button">
              <div className="mr-3"><img src={require('../images/icons/instagram.svg')} className="btn-icon" /></div>
              <div> ART </div>
            </a>
            <a target="/blank" href="https://www.artstation.com/ilierette" className="btn btn-primary"><img src={require('../images/icons/artstation.svg')} className="btn-icon" /></a>
            <a target="/blank" href="https://discord.com/invite/RHfP7tj" className="btn btn-primary"><img src={require('../images/icons/discord.svg')} className="btn-icon" /></a>
          </div>
          <div className="socials">
            <a target="/blank" href="https://www.facebook.com/ilierette/" className="btn btn-primary"><img src={require('../images/icons/facebook.svg')} className="btn-icon" /></a>
            <a target="/blank" href="https://www.linkedin.com/in/ilierette/" className="btn btn-primary"><img src={require('../images/icons/linkedin.svg')} className="btn-icon" /></a>
            <Link to='/blog/' className="btn btn-primary"><img src={require('../images/icons/wordpress.svg')} className="btn-icon" /></Link>
            <a target="/blank" href="https://github.com/Ilierette" className="btn btn-primary"><img src={require('../images/icons/github.svg')} className="btn-icon" /></a>
            <a target="/blank" href="https://twitter.com/ilierette" className="btn btn-primary"><img src={require('../images/icons/twitter.svg')} className="btn-icon" /></a>
          </div>
        </div>
      </div>
    </div>

  ))
}