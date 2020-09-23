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
          <img src={require("../images/avatar.jpg")} className="card-img-inner"/>
          <div className="socials">
            <button className="btn btn-primary w-100"> Watch lifestream </button>
          </div>


          <Link to='/blog/'>Recent blog posts</Link>
        </div>
      </div>

    </div>

  ))
}