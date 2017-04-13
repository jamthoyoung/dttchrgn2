import React from 'react';
import { FormGroup, ControlLabel, Panel, Row, Col } from 'react-bootstrap';
import Multiselect from 'react-bootstrap-multiselect';

class Talents extends React.Component {
  constructor(props) {
   super(props);
   this.handleMulti = (e) => {
     let selectedOptions = this.refs.multiRef.refs.multiselect.selectedOptions;
     let arr = [];
     for (var i = 0; i < selectedOptions.length; i++) {
       arr.push(parseInt(selectedOptions[i].value)); //second console output
     }
     this.props.selectTalents(arr);
   }
  }

  render() {
    return (
      <FormGroup controlId="FormGroupTalents">
        <ControlLabel>Talents</ControlLabel>
        <Multiselect ref="multiRef" onChange={this.handleMulti} data={this.props.multiselectitems} multiple/>
      </FormGroup>
    );
  }
}

export default Talents;
