import React, {Component} from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import ReactPlayer from 'react-player';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {mediaQuery} from "../constants/breakpoints";

const PlayerWrapper = styled('div')`
    position: relative;
    padding-top: 56.25%;
`;

const reactPlayer = css({
    position: 'absolute',
    top: 0,
    left: 0
});

const videoList = css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
    ${mediaQuery.medium(css`
        flex-direction: row;
    `)};
`;

const card = css`
    width: 100%;
    margin: 0;

    ${mediaQuery.medium(css`
        width: 33.33%;
        margin: 10px;
  `)};
`;

export class VideoList extends Component{
    render() {
        return (
            <section>
                <h1>list</h1>
                <div className={videoList}>
                    <Card className={card}>
                        <CardMedia image='https://i2.wp.com/viajealondres2017.romeroesteo.es/wp-content/uploads/2017/03/63730-640x360-tower-bridge-cam-640.jpg?w=640' title='Nombre del video'>
                            <PlayerWrapper>
                                <ReactPlayer
                                    className={reactPlayer}
                                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                                    width='100%'
                                    height='100%'
                                />
                            </PlayerWrapper>
                        </CardMedia>
                        <CardContent>
                            <Typography variant='headline' component='h2'>
                                Nombre del video
                            </Typography>
                            <Typography component='p'>
                                Nombre del Channel
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className={card}>
                        <CardMedia image='https://i2.wp.com/viajealondres2017.romeroesteo.es/wp-content/uploads/2017/03/63730-640x360-tower-bridge-cam-640.jpg?w=640' title='Nombre del video'>
                            <PlayerWrapper>
                                <ReactPlayer
                                    className={reactPlayer}
                                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                                    width='100%'
                                    height='100%'
                                />
                            </PlayerWrapper>
                        </CardMedia>
                        <CardContent>
                            <Typography variant='headline' component='h2'>
                                Nombre del video
                            </Typography>
                            <Typography component='p'>
                                Nombre del Channel
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className={card}>
                        <CardMedia image='https://i2.wp.com/viajealondres2017.romeroesteo.es/wp-content/uploads/2017/03/63730-640x360-tower-bridge-cam-640.jpg?w=640' title='Nombre del video'>
                            <PlayerWrapper>
                                <ReactPlayer
                                    className={reactPlayer}
                                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                                    width='100%'
                                    height='100%'
                                />
                            </PlayerWrapper>
                        </CardMedia>
                        <CardContent>
                            <Typography variant='headline' component='h2'>
                                Nombre del video
                            </Typography>
                            <Typography component='p'>
                                Nombre del Channel
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </section>
        )
    }
}