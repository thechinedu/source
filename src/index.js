import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import Container from './components/shared/container/Container';

import './index.css';

const App = () => (
  <BrowserRouter>
    <Container />
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
