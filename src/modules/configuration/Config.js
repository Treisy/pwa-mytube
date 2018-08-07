import React, {Component} from 'react';
import {ResultSearch} from "./ResultSearch";
import {Search} from "./Search";

export class Config extends Component{
    state = { usedSearch: false,
        results: []
    };

    _handleResults = (results) => {
        console.log(results);
        this.setState({results});
    };

    render() {
        return(
            <div>
                <Search onResults={this._handleResults}/>
                <ResultSearch items={this.state.results}/>
            </div>
        )
    }
}