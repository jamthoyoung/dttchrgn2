import React from 'react';
import { Image } from 'react-bootstrap';

class PrintScreen extends React.Component {
  render(){
    return (
      <div id="section-to-print">
        <Image id="image" src="/assets/tt-character-sheet.jpg" responsive />
        <div id="charname-to-print">{this.props.character.name}</div>
        <div id="charclass-to-print">{this.props.character.class}</div>
        <div id="kindred-name-to-print">{this.props.kindred.name}</div>
        <div id="level-to-print">{this.props.level}</div>
        <div id="str-to-print">{this.props.str}</div>
        <div id="con-to-print">{this.props.con}</div>
        <div id="dex-to-print">{this.props.dex}</div>
        <div id="spd-to-print">{this.props.spd}</div>
        <div id="lk-to-print">{this.props.lk}</div>
        <div id="iq-to-print">{this.props.iq}</div>
        <div id="wiz-to-print">{this.props.wiz}</div>
        <div id="chr-to-print">{this.props.chr}</div>
        <div id="pa-to-print">{this.props.personalAdds}</div>
      </div>
    );
  }
}

export default PrintScreen;
