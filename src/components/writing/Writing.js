import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { posts } from '../../utils';

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
      {posts.page(1).map(({url, title, date, summary}) => (
        <a href={url} key={url}>
          <article className="post">
            <h2 className="post-title">
              {title}
              <div className="post-date">
                {date}
              </div>
            </h2>

            <main className="summary">
              { summary }
            </main>
          </article>
        </a>
      ))}
    </section>
  </section>
);
