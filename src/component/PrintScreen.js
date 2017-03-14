import React from 'react';
import { Image } from 'react-bootstrap';

class PrintScreen extends React.Component {
  render(){
    return (
      <div>
        <Image id="section-to-print" src="/assets/tt-character-sheet.jpg" responsive />
      </div>
    );
  }
}

export default PrintScreen;
