import React, {Component} from 'react';
import {Container} from "../../assets/styles/core/grid";
import {VideoCardList} from "../../components/lists/VideoCardList";
import {Navbar} from "../../components/Navbar";
import {ResultSearch} from "./ResultSearch";
import {Search} from "./Search";

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
      <section>
        <Navbar/>
        <Container>
          <Search onResults={this._handleResults}/>
          <ResultSearch items={this.state.results} videos={this._handleChannelId}/>
          <VideoCardList videos={this.state.videos}/>
        </Container>
      </section>
    )
  }
}