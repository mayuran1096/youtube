import React, { Component } from "react";
import style from "../style/style.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }
  render() {
    return (
      <div className="search-bar">
        <input
          className="search-bar"
          onChange={event => {
            this.setState({ term: event.target.value });
          }}
        />
        {/* value of input is:{this.state.term} */}
      </div>
    );
  }

  onInputChange(e) {
    console.log(e.target.value);
  }
}
export default SearchBar;
