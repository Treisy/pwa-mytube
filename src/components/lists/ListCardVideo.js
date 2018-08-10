import React, {Component} from 'react';
import {Container} from "../../assets/styles/core/grid";
import appRoutes from "../../constants/appRoutes";
import {VIDEO} from "../../constants/database";
import {VideoCard} from "../cards/VideoCard";

export class ListCardVideo extends Component{
  state = {
    videos: []
  };

  componentDidMount() {
    VIDEO.once('value', snapshot => {
      snapshot.forEach(child => {
        this.setState({
          videos: this.state.videos.concat(child.val())
        })
      })
    });
  };

  render() {
    return (
      <Container>
        <section>
          List card video
          {
            this.state.videos.map(video => {
              return (
                <a href={appRoutes.app.VIDEO_PLAYER} key={video.videoId}>
                  <VideoCard
                    id={video.videoId}
                    thumbnail = {video.videoThumbnail}
                    title = { video.videoTitle}
                    description = { video.videoDescription }
                    channelId = { video.channelId }
                  />
                </a>
              )
            })
          }
        </section>
      </Container>
    )
  }
}
