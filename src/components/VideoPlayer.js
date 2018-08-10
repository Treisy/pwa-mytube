import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {css} from "emotion";
import PropTypes from "prop-types";
import React, {Component} from 'react';
import styled from "react-emotion";
import ReactPlayer from "react-player";
import {VIDEO_EMBED} from "../constants/general";
import setupStore from "../store";

const PlayerWrapper = styled('div')`
    position: relative;
    padding-top: 56.25%;
`;

const reactPlayer = css({
  position: 'absolute',
  top: 0,
  left: 0
});

export class VideoPlayer extends Component{
  static propTypes = {
    id: PropTypes.string,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
  };

  render() {
    const { id, thumbnail, title } = this.props;

    console.log(setupStore());

    let urlVideo = `${VIDEO_EMBED}${id}`;

    return (
      <Card key={id}>
        <CardMedia image={ thumbnail } title={ title }>
          <PlayerWrapper>
            <ReactPlayer
              className={reactPlayer}
              url={urlVideo}
              width='100%'
              height='100%'
            />
          </PlayerWrapper>
        </CardMedia>
      </Card>
    )
  }
}