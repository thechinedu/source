import React from 'react';
import { Helmet } from 'react-helmet';

import Button from '../shared/button/Button';
import { posts } from '../../utils';

import './Home.css';
import profile from './profile.png';

export default () => [
  <section className="home grid__container" key="home">
    <Helmet>
      <title>Chinedu Daniel - Full Stack Developer</title>
    </Helmet>

    <img
      src={profile}
      alt="Profile"
    />

    <div className="intro__wrapper">
      <h1>
        I
        <span className="highlight"> build </span>
        software for the <span className="highlight">web</span>
      </h1>

      <p>
        Hi there
        <span role="img" aria-label="waving hand"> 👋🏾</span>, my name is
        Chinedu Daniel. I’m a generalist developer building a specialty on
        the frontend. Welcome to my little space on the web.
      </p>

      <p>
        I'm currently with
        <a
          href="https://freighthub.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          FreightHub
        </a> building
        <a
          href="https://ship.freighthub.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          useful products
        </a>
        for humans.
      </p>

      <p>
        I love the open source culture and during my free time, I try to
        <a
          href="https://github.com/blueyedgeek"
          target="_blank"
          rel="noopener noreferrer"
        >
          give back
        </a> to the open source community.
      </p>

      <Button
        href={'mailto:chinedudaniel7@gmail.com?subject=Hi+Chinedu'}
        text='Say Hi'
      />
    </div>
  </section>,

  <section className="recent-posts" key="recent-posts">
    <h3>
      Recent Posts
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
