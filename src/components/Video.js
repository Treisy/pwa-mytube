import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {css} from "emotion";
import React, {Component} from 'react';
import styled from "react-emotion";
import ReactPlayer from "react-player";
import {Container} from "../assets/styles/core/grid";

const PlayerWrapper = styled('div')`
    position: relative;
    padding-top: 56.25%;
`;

const reactPlayer = css({
  position: 'absolute',
  top: 0,
  left: 0
});

const videoEmbed = 'https://www.youtube.com/embed/';
// h3YVKTxTOgU

export class Video extends Component{
  render() {
    let urlVideo = `${videoEmbed}h3YVKTxTOgU`;
    return (
        <Card>
          <CardMedia image='' title=''>
            <PlayerWrapper>
              <ReactPlayer
                className={reactPlayer}
                url={urlVideo}
                width='100%'
                height='100%'
              />
            </PlayerWrapper>
          </CardMedia>
          <CardContent>
            <Typography variant='subheading' component='h4'>
              Video title
            </Typography>
          </CardContent>
        </Card>
    )
  }
}