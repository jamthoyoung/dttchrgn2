import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class Name extends React.Component {
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
            placeholder={this.props.hair}/>
        </FormGroup>
    );
  }
}

export default Hair;
