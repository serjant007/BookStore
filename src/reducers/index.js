const initialState = {
  books: [
    { id: 1, title: 'Production-Ready Microservices', author: 'Susan J. Fowler' },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
    },
    {
      id: 3,
      title: 'JavaScript - The Definitive Guide',
      author: 'David Flanagan',
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return { books: action.payload };
    default:
      return state;
  }
};
export default reducer;
