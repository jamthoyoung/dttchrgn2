import React from 'react';
var DropzoneComponent = require('react-dropzone-component');
class Portrait extends React.Component {

  constructor(props) {
    super(props);
    this.djsConfig = {
      autoProcessQueue: false,
      addRemoveLinks: true,
      acceptedFiles: "image/jpeg,image/png,image/gif"

    }
    this.componentConfig = {
      iconFiletypes: ['.jpg', '.png', '.gif'],
      showFiletypeIcon: true,
      postUrl: 'no-url'
    };
    // Simple callbacks work too, of course
    this.callback = file => {
      console.log('calling update');
      this.getBase64(file);
    }

    this.success = file => {
      console.log('success(file)...');
      var reader = new FileReader();
      reader.onload = function () {
        console.log('FileReader.onload...' + reader.result);
        this.props.updateBase64Portrait(reader.result);
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
      reader.readAsDataURL(file);
    }

    this.callUpdatePortrait = reader => {
      console.log('Portrait.onload...' + reader.result);
      this.props.updateBase64Portrait(reader.result);
    }
    this.getBase64 = file => {
      console.log('getBase64(file)...');
       var reader = new FileReader();
       reader.onload = () => this.callUpdatePortrait(reader);
       reader.onerror = function (error) {
         console.log('Error: ', error);
       };
       reader.readAsDataURL(file);
    }

    this.removedfile = file => console.log('removing...', file);

    this.dropzone = null;
  }

  render(){

    console.log('rendering image: ' + this.props.base64Portrait);
    const config = this.componentConfig;
    const djsConfig = this.djsConfig;

    // For a list of all possible events (there are many), see README.md!
    const eventHandlers = {
         init: dz => this.dropzone = dz,
         drop: this.callbackArray,
         addedfile: this.callback,
         success: this.success,
         removedfile: this.removedfile
     }
    return (
      <div>
        <DropzoneComponent config={config} eventHandlers={eventHandlers}
                       djsConfig={djsConfig}/>
      </div>
      );
  }

}

export default Portrait;
