import React, { Component } from 'react';

import './Button.css';

export default ({href, text}) => (
  <a href={href} className="btn">
    {text}
  </a>
);
