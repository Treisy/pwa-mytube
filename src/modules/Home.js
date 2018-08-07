import React,{Component} from 'react';
import {Container} from "../assets/styles/core/grid";
import {Video} from "../components/Video";

export class Home extends Component{
  render() {
    return (
      <Container>
        <Video/>
        <Video/>
      </Container>
    )
  }
}