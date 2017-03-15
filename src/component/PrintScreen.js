import React from 'react';
import { Image } from 'react-bootstrap';

class PrintScreen extends React.Component {
  render(){
    return (
      <div id="section-to-print">
        <Image id="image" src="/assets/tt-character-sheet.jpg" responsive />
        <div id="str-to-print" class="field-to-print">32</div>
        <div id="iq-to-print" class="field-to-print">99</div>
      </div>
    );
  }
}

export default PrintScreen;
