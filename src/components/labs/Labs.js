import React from 'react';
import { Helmet } from 'react-helmet';

import lab from './lab.svg';

export default () => (
  <section className="labs grid__container">
    <Helmet>
      <title>Labs - Chinedu Daniel - Full Stack Developer</title>
    </Helmet>

    <img
      src={lab}
      alt="Pipette"
      title="Icon made by Freepik from Flaticon"
    />

    <div className="intro__wrapper">
      <h1>
        <span className="highlight">Labs</span>
      </h1>

      <p>
        Welcome to the lab. Herein lies my projects, experiments and whatnot.
        Have a look around, you might see something you like.
      </p>
    </div>
  </section>
);
