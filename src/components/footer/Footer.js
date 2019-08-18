import React from 'react';

import './Footer.css';

export default () => (
  <footer className="footer">
    <span>
      Made with
      &nbsp;<span role="img" aria-label="laptop emoji">💻</span> and 
      &nbsp;<span role="img" aria-label="coffee emoji">☕️</span>
    </span>
    <span>&copy; 2019. <span className="highlight">Chinedu</span> Daniel</span>
  </footer>
);