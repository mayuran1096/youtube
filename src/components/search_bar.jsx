import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }
  render() {
    return (
      <div>
        <input
          onChange={event => {
            this.setState({ term: event.target.value });
          }}
        />
        value of input is:{this.state.term}
      </div>
    );
  }

  onInputChange(e) {
    console.log(e.target.value);
  }
}
export default SearchBar;
