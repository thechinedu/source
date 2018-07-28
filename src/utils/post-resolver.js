import { createElement } from 'react';
import marksy from 'marksy';

const compile = marksy({ createElement })

export default class PostResolver {
  constructor(filePath) {
    this.filePath = filePath;
    this.markdownStr = require(`../posts/${filePath.substr(2)}`);
    this.compiledMdObj = compile(this.markdownStr);
  }

  url() {
    return '/posts' + this.filePath.substr(1).replace(/\.md$/, '')
      .replace(/\d-/g, match => (
        match.replace('-', '/')
      ));
  }

  title() {
    return this.compiledMdObj.toc[0]['title'];
  }

  date() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
      'Sep', 'Oct', 'Nov', 'Dec'];
    const [ year, mon, date ] = this.filePath.match(/\d+/g);

    return `${date} ${months[parseInt(mon, 10) - 1]}, ${year}`
  }

  summary() {
    const mdStr = this.markdownStr;

    return `${mdStr.split(/\n/).slice(2).join(' ').substr(0, 184).trim()}...`;
  }

  content() {
    return this.compiledMdObj.tree.slice(1);
  }
}
