import React from 'react';
import { Row, Col, Well } from 'react-bootstrap';
import Attribute from './Attribute.js';
import PersonalAdds from './PersonalAdds.js';
import CharacterLevel from './CharacterLevel.js';

class AttributeBox extends React.Component {
  render(){
    return (
      <div>
      <Well>
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
      </Well>
      <Well>
      <Col xs={12} sm={6} md={4} lg={3}>
        <PersonalAdds attr={this.props.attr} kindred={this.props.kindred} />
      </Col>
      <Col xs={12} sm={6} md={4} lg={3}>
        <CharacterLevel attr={this.props.attr} kindred={this.props.kindred} />
      </Col>
      </Well>
      </div>
    );
  }
}

export default AttributeBox;
