import React from 'react';
import { Helmet } from 'react-helmet';

import donut from './donut.svg';

import './Tidbits.css';

export default () => (
  <section className="tidbits grid__container">
    <Helmet>
      <title>Tidbits - Chinedu Daniel - Full Stack Developer</title>
    </Helmet>

    <img
      src={donut}
      alt="Donut"
      title="Icon made by Pixel perfect from Flaticon"
    />

    <div className="intro__wrapper">
      <h1>
        <span className="highlight">Tidbits</span>
      </h1>

      <p>
        Little nuggets of bite-sized goodness about things I have learnt on my
        coding journey.
      </p>
    </div>
  </section>
);
