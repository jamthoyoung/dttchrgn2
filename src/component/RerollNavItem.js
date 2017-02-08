import React from 'react';
import { NavItem } from 'react-bootstrap';

class RerollNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.rerollDiceLink();
  }
  render(){
    return (
      <NavItem eventKey={1}
            onClick={this.onClick} >Reroll</NavItem>

    );
  }
}

export default RerollNavItem;
