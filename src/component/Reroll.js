import React from 'react';
import { Button, FormGroup } from 'react-bootstrap';

class Reroll extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.rerollDiceLink();
  }
  render(){
    return (
      <div>
      <br/>
      <FormGroup controlId="CharacterKindredInput">
        <Button onClick={this.onClick} >Roll Dice</Button>
      </FormGroup>
      </div>
    );
  }
}

export default Reroll;
