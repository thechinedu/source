export default ({ posts, page = 1, postsPerPage = 10 }) => (
  posts.splice(postsPerPage * (page - 1), postsPerPage)
);
