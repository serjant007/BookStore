const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCES',
    payload: newBooks,
  };
};

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error,
  };
};

export const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId,
  };
};

export const bookMinusFromCart = (bookId) => {
  return {
    type: 'BOOK_MINUS_FROM_CART',
    payload: bookId,
  };
};

export const allBooksRemovedFromCart = (bookId) => {
  return {
    type: 'ALL_BOOKS_REMOVED_FROM_CART',
    payload: bookId,
  };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  bookstoreService
    .getBooks()
    .then((data) => {
      dispatch(booksLoaded(data));
    })
    .catch((err) => dispatch(booksError(err)));
};

export { fetchBooks };
