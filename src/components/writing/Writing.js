import React from 'react';
import { Helmet } from 'react-helmet';

import notepad from './notepad.svg';

import './Writing.css'

export default () => (
  <section className="writing grid__container">
    <Helmet>
      <title>Writing - Chinedu Daniel - Full Stack Developer</title>
    </Helmet>

    <img
      src={notepad}
      alt="Notepad"
    />

    <div className="intro__wrapper">
      <h1>
        <span className="highlight">Writing</span>
      </h1>

      <p>
        Welcome to my writers' corner where I get to write about anything I want
        (mostly technical articles but sometimes other thoughts).
      </p>
    </div>

    <section className="posts__container">
      <article className="post">
        <h2 className="post-title">
          Hello World
          <div className="post-date">
            18 July, 2018
          </div>
        </h2>
      </article>
    </section>
  </section>
);
