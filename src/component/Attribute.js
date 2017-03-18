import React from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { attrvalue } from '../util/character';

class Attribute extends React.Component {
  render(){
    var total = attrvalue(this.props.data, this.props.kmod);

    let tooltip = <Tooltip id={this.props.name + '_tooltip'}>{"[" + this.props.data.toString() + "] * " + this.props.kmod}</Tooltip>;

    return (
      <Row>
        <Col xs={5}>{this.props.name}</Col>
        <Col xs={7}>
          <OverlayTrigger overlay={tooltip} placement="bottom" delayShow={50} delayHide={50}>
            <span>
            {total}
            </span>
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
