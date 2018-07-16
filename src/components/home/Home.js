import React, { Component } from 'react';
import Button from '../shared/button/Button';

import './Home.css';
import profile from './profile.png';

export default class Home extends Component {
  render() {
    return [
      <header key="header" className="header">
        <nav className="navigation">
          <a href="/" className="logo">
            <span className="firstname">Chinedu</span>
            <span className="lastname"> Daniel </span>
            <span className="fancy-dot">.</span>
          </a>

          <a href="#">Writing</a>
          <a href="#">Portfolio</a>
          <a href="#">Labs</a>
        </nav>

        <section className="about" key="about">
          <img
            src={profile}
            alt="Profile"
          />

          <div>
            <h1>
              I
              <span className="highlight"> build </span>
              software for the <span className="highlight">web</span>
            </h1>

            <p>
              Hi there 👋🏾, my name is Chinedu Daniel. I’m a generalist developer
              building a specialty on the frontend. Welcome to my little space
              on the web.
            </p>

            <p>
              I'm currently with
              <a href="https://andela.com" target="_blank">Andela</a> building
              <a href="https://gobble.com" target="_blank">useful products</a>
              for humans.
            </p>

            <p>
              I love the open source culture and during my free time, I try to
              <a href="https://github.com/blueyedgeek" target="_blank">
              give back</a> to the open source community.
            </p>

            <Button
              href={'mailto:chinedudaniel7@gmail.com?subject=Hi+Chinedu'}
              text='Say Hi'
            />
          </div>
        </section>
      </header>
    ];
  }
}
