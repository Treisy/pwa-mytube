import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/SettingsApplications';
import {css} from 'emotion';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {spaceBottom} from "../assets/styles/helpers/utils";
import appRoutes from "../constants/appRoutes";

const flex = css`
  display: flex;
  justify-content: space-between;
`;

export class Navbar extends Component {
  render() {
    return (
      <AppBar position='static' color='default' className={spaceBottom}>
        <Toolbar className={flex}>
          <Link to={'/'}>
            <Typography variant="title" color="inherit">
              MyTube
            </Typography>
          </Link>
          <IconButton href={appRoutes.app.CONFIG} color='secondary' aria-label='Configuration'>
            <SettingsIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    )
  }
}