import React, { Component } from 'react';

export default class Writing extends Component {
  render() {
    return [
      <header key="writing--header">
        header stuff goes here
      </header>,

      <main key="writing--main">
        Articles go here
      </main>
    ];
  }
}
