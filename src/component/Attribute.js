import React from 'react';
import { Row, Col } from 'react-bootstrap';

class Attribute extends React.Component {
  render(){
    var total = this.props.data.reduce(
      function(previousValue, currentValue, currentIndex, array) {
	return previousValue + currentValue;
      });
    if(this.props.kmod > 1){
      total = Math.floor(total * this.props.kmod);
    } else {
      total = Math.ceil(total * this.props.kmod);
    }
    return (
      <Row>
        <Col xs={5}>{this.props.name}</Col><Col xs={7}>{total}</Col>
      </Row>
    );
  }
}

Attribute.propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    kmod: React.PropTypes.number.isRequired
}

export default Attribute;
