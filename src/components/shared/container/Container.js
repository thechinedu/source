import React from 'react';
import { Link, Route } from 'react-router-dom';

import Home from '../../home/Home';
import Writing from '../../writing/Writing';

import './Container.css';

export default () => (
  <section className="container">
    <nav className="navigation">
      <Link to="/" className="logo">
        <span className="firstname">Chinedu</span>
        <span className="lastname"> Daniel </span>
        <span className="fancy-dot">.</span>
      </Link>

      <Link to="/writing">
        Writing
      </Link>

      <a href="#">Labs</a>
      <a href="#">Tidbits</a>
    </nav>

    <div>
      <Route exact path="/" component={Home} />
      <Route path="/writing" component={Writing} />
    </div>
  </section>
);