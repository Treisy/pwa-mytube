import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {spaceBottom} from "../../assets/styles/helpers/utils";
import {defaultUrl} from "../../services/api";
import {css} from 'emotion';

const textCenter = css`
  text-align: center;
`;

const inputWidth = css`
  width: 70%;
`;


export class Search extends Component{
    state = {
        inputSearch: ''
    }

    _handleChange = (e) => {
        this.setState({ inputSearch: e.target.value });
    };

    _handleSubmit = (e) => {
        e.preventDefault();

        const {inputSearch} = this.state;

        fetch(`${defaultUrl}&q=${inputSearch}`)
            .then(res => res.json())
            .then(results => {
                console.log({results});
                this.props.onResults(results.items);
            })
    };

    render() {
        return (
            <section className={spaceBottom}>
                <Paper className={textCenter}>
                    <Typography component='h2' variant='headline'>Search</Typography>
                    <form action="" onSubmit={this._handleSubmit} >
                        <TextField
                            id="search"
                            label="Search field"
                            type="search"
                            margin="normal"
                            onChange={this._handleChange}
                            className={inputWidth}
                        />
                        <IconButton aria-label="Search">
                            <SearchIcon />
                        </IconButton>
                    </form>
                </Paper>
            </section>
        )
    }
}