// State arg is not application state, only the state this reducer cares about
// (generated by BooksReducer.
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
    default:
      return state;
  }
}
