import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import CharacterBox from './component/CharacterBox';

import initFormData from './initFormData.js';
import backstory from './backstory.js';

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
