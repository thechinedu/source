import React from 'react';
import { Helmet } from 'react-helmet';

import { posts } from '../../utils';

import notepad from './notepad.svg';

import './Writing.css'

export default () => [
  <section className="writing grid__container" key="writing">
    <Helmet>
      <title>Writing - Chinedu Daniel - Full Stack Developer</title>
    </Helmet>

    <img
      src={notepad}
      alt="Notepad"
      title="Icon made by Freepik from Flaticon"
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
  </section>,

  <section className="posts__container" key="posts__container">
    <h3>
      Posts
    </h3>
    {posts.page(1).map(({ url, title, date, summary }) => (
      <a href={url} key={url}>
        <article className="card">
          <h2 className="card-header">
            {title}
            <div className="date">
              {date}
            </div>
          </h2>

          <main className="summary">
            {summary}
          </main>
        </article>
      </a>
    ))}
  </section>
];
