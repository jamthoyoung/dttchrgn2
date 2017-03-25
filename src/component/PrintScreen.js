import React from 'react';
import jsPDF from 'jspdf';
import { Button } from 'react-bootstrap';

class PrintScreen extends React.Component {

  toDataUrl = (url, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  performJsPdf = (base64Img) => {
    var doc = new jsPDF('p','pt','letter');
    var imgData = base64Img;
    console.log(imgData);
    console.log('Adding to doc.');
    doc.addImage(imgData, 'JPEG', 0, 0, 612, 792);
    console.log('Image added.');
    doc.setFont('Times', 'Roman');
    doc.setFontSize(14);
    console.log('Writing text  to pdf.');
    doc.text(81, 150, this.props.character.name);
    console.log('Done writing text "' + this.props.character.name + '" to pdf.');
    doc.text(105, 181, this.props.kindred.name);
    //doc.text(20, 120, this.props.level);
    doc.text(155, 213, this.props.character.class);
    doc.text(95, 246, this.props.character.gender);
    console.log('About to save');
    doc.save("test.pdf");
  }

  doPDF = () => {
      this.toDataUrl('assets/tt-character-sheet.jpg', this.performJsPdf );
  }

  render(){
    return (
      <div>
          <Button id="printButton" onClick={() => {this.doPDF()}} >Print</Button>

        <div id="charclass-to-print">{this.props.character.class}</div>
        <div id="kindred-name-to-print">{this.props.kindred.name}</div>
        <div id="level-to-print">{this.props.level}</div>
        <div id="chargender-to-print">{this.props.character.gender}</div>
        <div id="height-to-print">{this.props.height}</div>
        <div id="weight-to-print">{this.props.weight}</div>
        <div id="gold-to-print">{this.props.character.gold} gp</div>
        <div id="str-to-print">{this.props.str}</div>
        <div id="con-to-print">{this.props.con}</div>
        <div id="dex-to-print">{this.props.dex}</div>
        <div id="spd-to-print">{this.props.spd}</div>
        <div id="lk-to-print">{this.props.lk}</div>
        <div id="iq-to-print">{this.props.iq}</div>
        <div id="wiz-to-print">{this.props.wiz}</div>
        <div id="chr-to-print">{this.props.chr}</div>
        <div id="pa-to-print">{this.props.personalAdds}</div>
        <div id="wtpossible-to-print">{this.props.str * 100}</div>
      </div>
    );
  }
}

export default PrintScreen;
