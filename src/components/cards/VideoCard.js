import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, {Component} from 'react';
import {spaceBottom} from "../../assets/styles/helpers/utils";
import {card, cardMedia} from "../../assets/styles/modules/cards";

export class VideoCard extends Component{
  static propTypes = {
    id: PropTypes.string,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    channelId: PropTypes.string
  };


  render() {
    const { id, thumbnail, title } = this.props;

    return (
      <Card className={[card, spaceBottom].join(' ')} key={id}>
        <CardMedia className={cardMedia} image={thumbnail} title={title} heigh={thumbnail}/>
        <CardContent>
          <Typography paragraph>{title}</Typography>
        </CardContent>
      </Card>
    );
  }

}