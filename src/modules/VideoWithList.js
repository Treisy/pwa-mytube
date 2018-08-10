import React, {Component} from 'react';
import {ListCardVideo} from "../components/lists/ListCardVideo";
import {Navbar} from "../components/Navbar";
import {VideoPlayer} from "../components/VideoPlayer";

export class VideoWithList extends Component{
  render () {
    return(
      <div>
        <Navbar/>
        video with list
        <VideoPlayer/>
        <ListCardVideo/>
      </div>
    )
  }
}