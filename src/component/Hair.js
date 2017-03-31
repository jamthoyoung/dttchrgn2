import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class Hair extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.props.onChange(event.target.value);
  }
  render(){
    return (
        <FormGroup controlId="CharacterHairInput">
          <ControlLabel>Hair</ControlLabel>
          <FormControl
            type="text"
            onChange={this.onChange}
            value={this.props.hair}
            placeholder="Enter hair"/>
        </FormGroup>
    );
  }
}

export default Hair;
