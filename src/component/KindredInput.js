import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class KindredInput extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.props.onChange(event.target.value);
  }
  render(){
    return (
        <FormGroup controlId="CharacterKindredInput">
          <ControlLabel>Kindred</ControlLabel>
          <FormControl 
            componentClass="select" 
            onChange={this.onChange}
            placeholder="Please select"
            value={this.props.value}>
          {this.props.kindredlist.map(function(kin,key){
            return <option key={key} value={kin.id}>{kin.name}</option>
          })}
          </FormControl>
        </FormGroup>
    );
  }
}

export default KindredInput;
