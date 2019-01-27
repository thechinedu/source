import paginate from './paginate';
import PostResolver from './post-resolver';

export const posts = {};

posts.page = page => paginate({ posts: allPosts(), page });

posts.find = url => allPosts().find(obj => obj.url === url);

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
