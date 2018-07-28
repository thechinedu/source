export default (list) => (
  {
    fetchPage({ page = 1, perPage = 10 }) {
      const start = perPage * (page - 1);

      return list.splice(start, perPage);
    }
  }
);
