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
          dttchrgen2
        </PageHeader>
        <CharacterBox 
           initFormData={initFormData} 
           backstory={backstory} 
        />
      </div>
    );
  }
}

export default App;

