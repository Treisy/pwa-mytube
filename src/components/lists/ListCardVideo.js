import PropTypes from "prop-types";
import React, {Component} from 'react';
import {Container} from "../../assets/styles/core/grid";
import appRoutes from "../../constants/appRoutes";
import {VideoCard} from "../cards/VideoCard";

export class ListCardVideo extends Component{
  static propTypes = {
    videos: PropTypes.array
  };

  render() {
    const { videos } = this.props;

    return (
      <Container>
        <section>
          List card video
          {
            videos.map(video => {
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