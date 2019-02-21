import React, { Component } from "react";

import ReactDom from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import style from "./style/style.css";
import VideoList from "./components/video_list";
import VideoDetails from "./components/video_details";
import Helmet from "react-helmet";

const API_KEY = "AIzaSyAtuNXcxUIYxFcyIBfu9ENL7COJjqbTnQw";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videoes: [], selectedItem: null };
    YTSearch({ key: API_KEY, term: "ys mayuran" }, data => {
      this.setState({ videoes: data, selectedItem: data[0] });
    });
  }
  render() {
    return (
      <div className="home">
        <Helmet>
          <style>{"body { background-color: indianred; }"}</style>
        </Helmet>
        <SearchBar />
        <VideoDetails video={this.state.selectedItem} />
        <VideoList
          videoes={this.state.videoes}
          onVideoSelect={selectedItem => this.setState({ selectedItem })}
        />
      </div>
    );
  }
}
ReactDom.render(<App />, document.querySelector(".root"));
