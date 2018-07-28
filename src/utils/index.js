import paginate from './paginate';
import PostResolver from './post-resolver';

export const posts = {};

posts.page = (n) => paginate(allPosts()).fetchPage({page: n, perPage: 10});

posts.find = (url) => allPosts().find(obj => obj.url === url);

const allPosts = () => {
  let posts = require.context('../posts', false, /\.md/).keys();

  return posts.map(filePath => {
    const postResolver = new PostResolver(filePath);

    return {
      url: postResolver.url(),
      title: postResolver.title(),
      date: postResolver.date(),
      summary: postResolver.summary(),
      content: postResolver.content()
    };
  });
};
