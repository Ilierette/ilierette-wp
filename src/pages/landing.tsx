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
          <div className="description mb-4">Dancing nerd | Stage girl | Digital artist</div>
          <img src={require("../images/avatar.jpg")} className="card-img-inner" />
          <div className="socials">
            <button className="btn btn-primary w-100 social-button">
              <img src={require('../images/icons/twitch.svg')} className="btn-icon mr-2" />
                Watch stream
              </button>
          </div>
          <div className="socials">
            <button className="btn btn-primary social-button"><img src={require('../images/icons/instagram.svg')} className="btn-icon" /></button>
            <button className="btn btn-primary social-button"><img src={require('../images/icons/discord.svg')} className="btn-icon" /></button>
            <button className="btn btn-primary social-button"><img src={require('../images/icons/youtube.svg')} className="btn-icon" /></button>
            <button className="btn btn-primary social-button"><img src={require('../images/icons/instagram.svg')} className="btn-icon" /></button>
            <button className="btn btn-primary social-button"><img src={require('../images/icons/artstation.svg')} className="btn-icon" /></button>
            <Link to='/blog/' className="btn btn-primary social-button"><img src={require('../images/icons/wordpress.svg')} className="btn-icon" /></Link>
          </div>
          <div className="description mt-4">email: ilierette@gmail.com</div>
        </div>
      </div>
    </div>

  ))
}