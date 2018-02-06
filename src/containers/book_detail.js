import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookDetail extends Component {
  renderList() {}

  render() {
    if (!this.props.book) {
      return <div>Select a book...</div>;
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

//export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
export default connect(mapStateToProps)(BookDetail);
