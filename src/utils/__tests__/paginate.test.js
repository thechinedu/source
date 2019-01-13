import paginate from '../paginate';

describe('pagination utility', () => {
  const generatePosts = () => (
    [
      '2019-01-01-post1',
      '2019-01-12-post2',
      '2019-01-13-post3',
      '2019-01-04-post4',
      '2019-01-05-post5',
      '2019-01-06-post6',
      '2019-01-07-post7',
      '2019-01-08-post8',
      '2019-01-09-post9',
      '2019-01-10-post10'
    ]
  );

  it('takes in a list of items and returns the specified subset', () => {
    const result = paginate({
      posts: generatePosts(),
      page: 1,
      postsPerPage: 5
    });

    expect(result).toEqual([
      '2019-01-01-post1',
      '2019-01-12-post2',
      '2019-01-13-post3',
      '2019-01-04-post4',
      '2019-01-05-post5',
    ]);
  });

  it('defaults page to 1', () => {
    const result = paginate({ posts: generatePosts(), postsPerPage: 5 });

    expect(result).toEqual([
      '2019-01-01-post1',
      '2019-01-12-post2',
      '2019-01-13-post3',
      '2019-01-04-post4',
      '2019-01-05-post5'
    ]);
  });

  it('defaults postsPerPage to 10', () => {
    const result = paginate({ posts: generatePosts() });

    expect(result).toEqual([
      '2019-01-01-post1',
      '2019-01-12-post2',
      '2019-01-13-post3',
      '2019-01-04-post4',
      '2019-01-05-post5',
      '2019-01-06-post6',
      '2019-01-07-post7',
      '2019-01-08-post8',
      '2019-01-09-post9',
      '2019-01-10-post10'
    ]);
  });

  it('returns an empty list when there are no items left to return', () => {
    const result = paginate({
      posts: generatePosts(),
      page: 2,
      postsPerPage: 10
    });

    expect(result.length).toEqual(0)
  });
});
