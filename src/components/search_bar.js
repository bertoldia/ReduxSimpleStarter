import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  onInputChange(event) {
    const {target: {value}} = event;
    this.setState({term: value});
    this.props.onSearchTermChange(value);
  }

  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term} onChange={this.onInputChange} />
      </div>
    );
  }
}
export default SearchBar;
