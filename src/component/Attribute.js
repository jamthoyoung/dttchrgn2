import React from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

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

    let tooltip = <Tooltip>{"[" + this.props.data.toString() + "] * " + this.props.kmod}</Tooltip>;

    return (
      <Row>
        <Col xs={5}>{this.props.name}</Col>
        <Col xs={7}>
          <OverlayTrigger overlay={tooltip} placement="bottom" delayShow={50} delayHide={50}>
            <div>
            {total}
            </div>
          </OverlayTrigger>
        </Col>
      </Row>
    );
  }
}

Attribute.propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    kmod: React.PropTypes.number.isRequired
}

export default Attribute;
