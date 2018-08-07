import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container} from "../../assets/styles/core/grid";
import {VideoCard} from "../../components/VideoCard";

export class VideoList extends Component{
  static propTypes = {
    videos: PropTypes.array
  };

  render() {
    const { videos } = this.props;

    console.log(videos);
    return(
      <Container>
          videos
        {
          videos.map(video => {
            return (
              <div key={video.id.videoId}>
                <VideoCard
                  id={video.id.videoId}
                  thumbnail={video.snippet.thumbnails.high.url}
                  title={video.snippet.title}
                  description={video.snippet.description}
                />
              </div>
            )
          })
        }
      </Container>
    )
  }
}