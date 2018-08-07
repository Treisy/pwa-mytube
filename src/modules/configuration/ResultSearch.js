import Button from "@material-ui/core/Button/Button";
import Card from '@material-ui/core/Card';
import CardActions from "@material-ui/core/CardActions/CardActions";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
import React, {Component} from 'react';
import {gridList} from "../../assets/styles/core/grid";
import {spaceBottom} from "../../assets/styles/helpers/utils";
import {card, cardMedia} from "../../assets/styles/modules/cards";
import {VideoCard} from "../../components/VideoCard";
import {videoByChannel} from "../../services/api";


export class ResultSearch extends Component{
  static propTypes = {
    items: PropTypes.array
  };


  _handlerSeeVideos = (id, e) => {
    e.preventDefault();

    fetch(`${videoByChannel}&channelId=${id}`)
      .then(res => res.json())
      .then(results => {
        console.log({results});
        this.props.videos(results.items);
      })
  };

  render() {
    const {items} = this.props;

    return (
      <section>
        <div className={gridList}>
          {
            items.map(item => {
              if(item.id.kind === 'youtube#video')  {
                return (
                  <div key={item.id.videoId}>
                    <VideoCard
                      id={item.id.videoId}
                      thumbnail={item.snippet.thumbnails.high.url}
                      title={item.snippet.title}
                      description={item.snippet.description}
                    />
                  </div>
                )
              } else if(item.id.kind === 'youtube#channel') {
                return (
                  <Card className={[card, spaceBottom].join(' ')} key={item.id.channelId}>
                    <CardMedia className={cardMedia} image={item.snippet.thumbnails.high.url} title={item.snippet.channelTitle}/>
                    <CardContent>
                      <Typography component='h3' variant='headline'>
                        {item.snippet.channelTitle}
                      </Typography>
                      <Typography paragraph>
                        {item.snippet.description}
                      </Typography>
                    </CardContent>
                    <CardActions disableActionSpacing>
                      <Button color='primary' onClick={(e) => this._handlerSeeVideos(item.id.channelId, e)}>See Videos</Button>
                    </CardActions>
                  </Card>
                )
              }
            })
          }
        </div>
      </section>
    )
  }
}