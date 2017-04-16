//import React from 'react';
import { FormGroup, ControlLabel } from 'react-bootstrap';
//import BS from 'react-bootstrap';
//import BS.RBSelect from 'react-bootstrap-select';

React = require('react');
React.Bootstrap = require('react-bootstrap');
React.Bootstrap.Select = require('react-bootstrap-select');

class Talents extends React.Component {
  constructor(props) {
   super(props);
   this.handleMulti = (e) => {
     /*
     let selectedOptions = this.refs.multiRef.refs.multiselect.selectedOptions;
     let arr = [];
     for (var i = 0; i < selectedOptions.length; i++) {
       arr.push(parseInt(selectedOptions[i].value)); //second console output
     }
     this.props.selectTalents(arr);
     */
   }
  }

  render() {
    return (
      <FormGroup controlId="FormGroupTalents">
        <ControlLabel>Talents</ControlLabel>
        <React.Bootstrap.Select ref="multiRef" onChange={this.handleMulti} data={this.props.multiselectitems} multiple>
          <optgroup label="Picnic" disabled>
            <option>Mustard</option>
            <option>Ketchup</option>
            <option>Relish</option>
          </optgroup>
          <optgroup label="Camping">
            <option>Tent</option>
            <option>Flashlight</option>
            <option>Toilet Paper</option>
          </optgroup>
        </React.Bootstrap.Select>
      </FormGroup>
    );
  }
}

export default Talents;
