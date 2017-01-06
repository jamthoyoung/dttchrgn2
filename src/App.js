import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { Grid, Well, PageHeader, Jumbotron } from 'react-bootstrap';
import CharacterBox from './component/CharacterBox';

class App extends Component {
  render() {
    return (
      <Grid fluid="true">
        <PageHeader>
          dttchrgen2
        </PageHeader>
        <Jumbotron>
          <Well>
            <CharacterBox initFormData={this.props.initFormData} kindredlist={this.props.kindredlist}/>
          </Well>
        </Jumbotron>
      </Grid>
    );
  }
}

export default App;

