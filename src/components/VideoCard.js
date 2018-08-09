import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from '@material-ui/icons/Favorite';
import {css} from 'emotion';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {spaceBottom} from "../assets/styles/helpers/utils";
import {card, cardMedia} from "../assets/styles/modules/cards";
import {REF_VIDEOS} from "../constants/database";

const favorite = css`
    color: red;
`;

export class VideoCard extends Component{
  static propTypes = {
    id: PropTypes.string,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    channelId: PropTypes.string
  };

  state = {
    isFavorite: false
  };

  _handleSaveVideo = (e) => {
    e.preventDefault();

    const currentState = this.state.isFavorite;
    this.setState({ isFavorite: !currentState });

    const item = {
      videoId: this.props.id,
      videoTitle: this.props.title,
      videoThumbnail: this.props.thumbnail,
      videoDescription: this.props.description,
      channelId: this.props.channelId
    }

    REF_VIDEOS.push(item);
  };

  render() {
    const { id, thumbnail, title, description } = this.props;

    return (
      <Card className={[card, spaceBottom].join(' ')} key={id}>
        <CardMedia className={cardMedia} image={thumbnail} title={title} heigh={thumbnail}/>
        <CardContent>
          <Typography variant='headline' component='h3'>{title}</Typography>
          <Typography paragraph>{description}</Typography>
        </CardContent>
        <CardActions disableActionSpacing>
          <IconButton aria-label='Save video'>
            <FavoriteIcon
              className={this.state.isFavorite ? favorite : ''}
              onClick={(e) => this._handleSaveVideo(e)}
            />
          </IconButton>
        </CardActions>
      </Card>
    )
  }
}