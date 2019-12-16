import ReactDOMServer from 'react-dom/server';
import PostResolver from '../post-resolver';

describe('post resolver', () => {
  const filePath = './2019-01-01-hello-world.md';
  const post = new PostResolver(filePath);

  describe('#url', () => {
    it('returns a url to the markdown post', () => {
      expect(post.url()).toEqual('/posts/2019/01/01/hello-world');
    });
  });

  describe('#title', () => {
    it('returns the headline title in a markdown post', () => {
      expect(post.title()).toEqual('Hello world test');
    });
  });

  describe('#date', () => {
    it('returns a human friendly version of the date', () => {
      expect(post.date()).toEqual('01 Jan, 2019');
    });
  });

  describe('#summary', () => {
    it('returns a substring representing the post summary', () => {
      const postSummary = ReactDOMServer.renderToStaticMarkup(post.summary());

      expect(postSummary).toEqual('<p>This will be the summary</p>');
    });
  });

  describe('#content', () => {
    it('returns the full content of the markdown', () => {
      const wrapper = post.content()[0];
      const content = wrapper.props.children[0];

      expect(content).toEqual('This is a test file');
    });
  });
});
