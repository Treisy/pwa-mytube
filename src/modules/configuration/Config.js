import React, {Component} from 'react';
import {Container} from "../../assets/styles/core/grid";
import {ResultSearch} from "./ResultSearch";
import {Search} from "./Search";
import {VideoList} from "../VideoList";

export class Config extends Component{
  state = { usedSearch: false,
    results: [],
    channelId: '',
    videos: []
  };

  _handleResults = (results) => {
    this.setState({results});
  };


  _handleChannelId = (videos) => {
    this.setState({videos});
  };


  render() {
    return(
      <Container>
        <Search onResults={this._handleResults}/>
        <ResultSearch items={this.state.results} videos={this._handleChannelId}/>
        <VideoList videos={this.state.videos}/>
      </Container>
    )
  }
}