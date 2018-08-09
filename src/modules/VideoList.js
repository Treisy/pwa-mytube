import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Container} from "../assets/styles/core/grid";
import {VideoCard} from "../components/VideoCard";

export class VideoList extends Component{
  static propTypes = {
    videos: PropTypes.array
  };

  render() {
    const { videos } = this.props;

    return(
      <Container>
        {
          videos.map(video => {
            return (
              <VideoCard
                id={video.id.videoId}
                thumbnail={video.snippet.thumbnails.high.url}
                title={video.snippet.title}
                description={video.snippet.description}
                channelId={video.snippet.channelId}
              />
            )
          })
        }
      </Container>
    )
  }
}