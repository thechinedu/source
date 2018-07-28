import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { posts } from '../../utils';

export default class Post extends Component {
  state = {
    post: null
  }

  componentWillMount() {
    const { url } = this.props.match;

    this.setState({
      post: posts.find(url)
    });
  }

  render() {
    const { post } = this.state;

    return (
      <article className="post">
        <Helmet>
          <title>
            { post.title } - Chinedu Daniel - Full Stack Developer
          </title>
        </Helmet>

        <header>
          <h1>{post.title}</h1>
        </header>

        <main>
          { post.content }
        </main>
      </article>
    );
  }
}
