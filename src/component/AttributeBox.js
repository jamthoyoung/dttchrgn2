import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Attribute from './Attribute.js';

class AttributeBox extends React.Component {
  render(){
    return (
      <div>
      <Row>
      <Col xs={12} sm={6} md={4} lg={3}>
        <Attribute name="STR" data={this.props.attr.str} kmod={this.props.kindred.strmod}/>
      </Col>
      <Col xs={12} sm={6} md={4} lg={3}>
        <Attribute name="CON" data={this.props.attr.con} kmod={this.props.kindred.conmod}/>
      </Col>
      <Col xs={12} sm={6} md={4} lg={3}>
        <Attribute name="DEX" data={this.props.attr.dex} kmod={this.props.kindred.dexmod}/>
      </Col>
      <Col xs={12} sm={6} md={4} lg={3}>
        <Attribute name="SPD" data={this.props.attr.spd} kmod={this.props.kindred.spdmod}/>
      </Col>
      <Col xs={12} sm={6} md={4} lg={3}>
        <Attribute name="LK" data={this.props.attr.lk} kmod={this.props.kindred.lkmod}/>
      </Col>
      <Col xs={12} sm={6} md={4} lg={3}>
        <Attribute name="IQ" data={this.props.attr.iq} kmod={this.props.kindred.iqmod}/>
      </Col>
      <Col xs={12} sm={6} md={4} lg={3}>
        <Attribute name="WIZ" data={this.props.attr.wiz} kmod={this.props.kindred.wizmod}/>
      </Col>
      <Col xs={12} sm={6} md={4} lg={3}>
        <Attribute name="CHR" data={this.props.attr.chr} kmod={this.props.kindred.chrmod}/>
      </Col>
      </Row>
      </div>
    );
  }
}

export default AttributeBox;
