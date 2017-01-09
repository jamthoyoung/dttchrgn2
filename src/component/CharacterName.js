import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class CharacterName extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.props.onChange(event.target.value);
  }
  render(){
    return (
        <FormGroup controlId="CharacterNameInput">
          <ControlLabel>Name</ControlLabel>
          <FormControl 
            type="text" 
            onChange={this.onChange}
            placeholder={this.props.name}/>
        </FormGroup>
    );
  }
}

export default CharacterName;

