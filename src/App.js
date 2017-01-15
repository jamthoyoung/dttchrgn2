import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { PageHeader } from 'react-bootstrap';
import CharacterBox from './component/CharacterBox';

class App extends Component {
  render() {
    return (
      <div>
        <PageHeader>
          dttchrgen2
        </PageHeader>
        <CharacterBox 
           initFormData={this.props.initFormData} 
           backstory={this.props.backstory} 
           kindredlist={this.props.kindredlist}/>
      </div>
    );
  }
}

export default App;

