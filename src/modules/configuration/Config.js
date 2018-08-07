import React, {Component} from 'react';
import {Container} from "../../assets/styles/core/grid";
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
      <Container>
        <Search onResults={this._handleResults}/>
        <ResultSearch items={this.state.results}/>
      </Container>
    )
  }
}