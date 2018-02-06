import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

// whatever is retuned from here will appear as props in BookList.
function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

// anything retuned from here will appear as props in BookList
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result will be propagated to all
  // reducers.
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList from Component to Container.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
