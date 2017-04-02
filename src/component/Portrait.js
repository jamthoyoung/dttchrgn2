import React from 'react';
//import { Dropzone } from 'react-dropzone';
var Dropzone = require('react-dropzone');
class Portrait extends React.Component {

  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
    console.log('constructing...');
  }

  onDrop(acceptedFiles, rejectedFiles) {
      console.log('Accepted files: ', acceptedFiles);
      console.log('Rejected files: ', rejectedFiles);
  }

  render(){
    console.log('rendering...');
    return (
      <div>
        <Dropzone onDrop={this.onDrop}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
      </div>
      );
  }

}

export default Portrait;
