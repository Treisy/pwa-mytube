import Button from "@material-ui/core/Button/Button";
import Card from '@material-ui/core/Card';
import CardActions from "@material-ui/core/CardActions/CardActions";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {css} from 'emotion';
import PropTypes from "prop-types";
import React, {Component} from 'react';
import {gridList} from "../../assets/styles/core/grid";
import {spaceBottom} from "../../assets/styles/helpers/utils";
import {mediaQuery} from "../../constants/breakpoints";


const card = css`
    width: 100%;

    ${mediaQuery.medium(css`
        width: 32.33%;
        margin-left: 5px;
        margin-right: 5px;
  `)};
`;

const cardMedia = css`
    height: 0;
    padding-top: 56.25%;
`;

export class ResultSearch extends Component{
  static propTypes = {
    items: PropTypes.array
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
                  <Card className={[card, spaceBottom].join(' ')} key={item.id.videoId}>
                    <CardMedia image={item.snippet.thumbnails.high.url} title={item.snippet.title}/>
                    <CardContent>
                      <Typography variant='headline' component='h3'>
                        {item.snippet.title}
                      </Typography>
                      <Typography paragraph>
                        {item.snippet.description}
                      </Typography>
                    </CardContent>
                  </Card>
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
                      <Button href='' color='primary'>See PlayLists</Button>
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