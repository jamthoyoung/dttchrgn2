import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import CharacterBox from './component/CharacterBox';

class App extends Component {
  render() {
    return (
      <div>
        <PageHeader>
          Character Dice Roller for Deluxe Tunnels and Trolls
        </PageHeader>
        <CharacterBox />
      </div>
    );
  }
}

export default App;
