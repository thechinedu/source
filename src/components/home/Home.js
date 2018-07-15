import React, { Component } from 'react';

import './Home.css';
import profile from './profile1.jpg';

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
              I build software for the web
            </h1>

            <p>
              Hi there 👋🏾, my name is Chinedu Daniel. I’m a generalist developer
              building specialty on the frontend. Welcome to my little space on
              the web.
            </p>

            <p>
              I'm currently with
              <a href="https://andela.com">Andela</a> building
              <a href="https://gobble.com">useful products</a> for humans.
            </p>
          </div>
        </section>
      </header>
    ];
  }
}
