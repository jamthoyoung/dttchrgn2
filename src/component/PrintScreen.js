import React from 'react';
import jsPDF from 'jspdf';
import { Button } from 'react-bootstrap';

(function(API){
    API.myText = function(txt, options, x, y) {
        options = options ||{};
        /* Use the options align property to specify desired text alignment
         * Param x will be ignored if desired text alignment is 'center'.
         * Usage of options can easily extend the function to apply different text
         * styles and sizes
        */
        if( options.align === "center" ){
            // Get current font size
            let fontSize = this.internal.getFontSize();

            // Get page width
            //var pageWidth = this.internal.pageSize.width;

            // Get the actual text's width
            /* You multiply the unit width of your string by your font size and divide
             * by the internal scale factor. The division is necessary
             * for the case where you use units other than 'pt' in the constructor
             * of jsPDF.
            */
            let txtWidth = this.getStringUnitWidth(txt)*fontSize/this.internal.scaleFactor;

            // Calculate text's x coordinate
            //x = ( pageWidth - txtWidth ) / 2;
            x -= (txtWidth / 2);
        }

        // Draw text at x,y
        this.text(txt,x,y);
    }
})(jsPDF.API);

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
    console.log('Adding bkground image to doc.');
    doc.addImage(imgData, 'JPEG', 0, 0, 612, 792);
    if(this.props.character.base64Portrait){
      console.log('Adding portrait image: ' +this.props.character.base64Portrait );
      doc.addImage(this.props.character.base64Portrait, 'PNG', 375, 48, 165, 165);
    }
    doc.setFont('Times', 'Roman');
    doc.setFontSize(14);
    console.log('Writing name ' + this.props.character.name + ' to pdf...');
    doc.text(81, 150, ''+this.props.character.name);
    console.log('Writing text "'+this.props.kindred.name + '" to pdf.');
    doc.text(105, 181, ''+this.props.kindred.name);
    console.log('Writing text "'+this.props.level + '" to pdf.');
    doc.text(301, 181, '' + this.props.level);
    console.log('Writing text "' + this.props.character.class + '" to pdf.');
    doc.text(155, 213, ''+this.props.character.class);
    console.log('Writing text "' + this.props.character.gender + '" to pdf.');
    doc.text(95, 246, ''+this.props.character.gender);
    console.log('Writing text "' + this.props.height + '" to pdf.');
    doc.text(200, 246, ''+this.props.height);
    console.log('Writing text "' + this.props.weight + '" to pdf.');
    doc.text(305, 246, ''+this.props.weight);
    console.log('Writing text "' + this.props.character.age + '" to pdf.');
    doc.text(70, 278, ''+this.props.character.age);
    console.log('Writing text "' + this.props.character.hair + '" to pdf.');
    doc.text(145, 278, ''+this.props.character.hair);
    console.log('Writing text "' + this.props.character.gold + '" to pdf.');
    doc.text(300, 278, ''+this.props.character.gold + ' gp');
    console.log('Writing text "' + this.props.str + '" to pdf.');
    doc.myText('' + this.props.str, { align: 'center'}, 63, 364);
    if(this.props.isStrSpecialized){
      doc.setFontSize(6);
      doc.myText('Specialized', { align: 'center'}, 63, 371);
      doc.setFontSize(14);
    }
    doc.myText('' + this.props.con, { align: 'center'}, 63, 414);
    if(this.props.isConSpecialized){
      doc.setFontSize(6);
      doc.myText('Specialized', { align: 'center'}, 63, 421);
      doc.setFontSize(14);
    }
    doc.myText('' + this.props.dex, { align: 'center'}, 63, 464);
    if(this.props.isDexSpecialized){
      doc.setFontSize(6);
      doc.myText('Specialized', { align: 'center'}, 63, 471);
      doc.setFontSize(14);
    }
    doc.myText('' + this.props.spd, { align: 'center'}, 63, 514);
    if(this.props.isSpdSpecialized){
      doc.setFontSize(6);
      doc.myText('Specialized', { align: 'center'}, 63, 521);
      doc.setFontSize(14);
    }
    doc.myText('' + this.props.lk, { align: 'center'}, 223, 364);
    if(this.props.isLkSpecialized){
      doc.setFontSize(6);
      doc.myText('Specialized', { align: 'center'}, 223, 371);
      doc.setFontSize(14);
    }
    doc.myText('' + this.props.iq, { align: 'center'}, 223, 414);
    if(this.props.isIqSpecialized){
      doc.setFontSize(6);
      doc.myText('Specialized', { align: 'center'}, 223, 421);
      doc.setFontSize(14);
    }
    doc.myText('' + this.props.wiz, { align: 'center'}, 223, 464);
    if(this.props.isWizSpecialized){
      doc.setFontSize(6);
      doc.myText('Specialized', { align: 'center'}, 223, 471);
      doc.setFontSize(14);
    }
    doc.myText('' + this.props.chr, { align: 'center'}, 223, 514);
    if(this.props.isChrSpecialized){
      doc.setFontSize(6);
      doc.myText('Specialized', { align: 'center'}, 223, 521);
    }
    console.log('Writing text "' + this.props.talents.toString() + '" to pdf.');
    doc.text(362, 326, this.props.talents.toString());

    doc.setFontSize(18)
    doc.myText('' + this.props.personalAdds, { align: 'center'}, 145, 586);
    doc.text(130, 642, '' + this.props.str * 100);

    console.log('About to save');
    doc.save("character.pdf");
  }

  doPDF = () => {
      this.toDataUrl('assets/tt-character-sheet.jpg', this.performJsPdf );
  }

  render(){
    return (
      <div>
          <Button id="printButton" onClick={() => {this.doPDF()}}>Generate Character Sheet</Button>
      </div>
    );
  }
}

export default PrintScreen;
