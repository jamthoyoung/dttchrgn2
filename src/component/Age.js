import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class Age extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.props.onChange(event.target.value);
  }
  render(){
    return (
        <FormGroup controlId="CharacterAgeInput">
          <ControlLabel>Age</ControlLabel>
          <FormControl
            type="text"
            onChange={this.onChange}
            value={this.props.age}
            placeholder="Enter age"/>
        </FormGroup>
    );
  }
}

export default Age;
