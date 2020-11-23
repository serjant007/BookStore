const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }
  if (idx === -1) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (book, item, quantity) => {
  if (item) {
    return {
      ...item,
      count: item.count + quantity,
      total: Number(item.total) + quantity * Number(book.price),
    };
  } else {
    return {
      id: book.id,
      title: book.title,
      count: 1,
      total: Number(book.price),
    };
  }
};

const updateOrder = (state, bookId, quantity) => {
  const {
    bookList: { books },
    shoppingCart: { cartItems },
  } = state;
  console.log(cartItems);
  const book = books.find(({ id }) => id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(book, item, quantity);
  const totalPrice = cartItems.map((item) => item.total);
  console.log(totalPrice);
  return {
    orderTotal: totalPrice,
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }
  switch (action.type) {
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);
    case 'BOOK_MINUS_FROM_CART':
      return updateOrder(state, action.payload, -1);
    case 'ALL_BOOKS_REMOVED_FROM_CART':
      const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);
    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
