import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Attribute from './Attribute.js';
import PersonalAdds from './PersonalAdds.js';
import CharacterLevel from './CharacterLevel.js';

class AttributeBox extends React.Component {
  render(){
    return (
      <Row>
      <Col sm={6}>
        <Attribute name="STR" data={this.props.attr.str} kmod={this.props.kindred.strmod}/>
      </Col>
      <Col sm={6}>
        <Attribute name="CON" data={this.props.attr.con} kmod={this.props.kindred.conmod}/>
      </Col>
      <Col sm={6}>
        <Attribute name="DEX" data={this.props.attr.dex} kmod={this.props.kindred.dexmod}/>
      </Col>
      <Col sm={6}>
        <Attribute name="SPD" data={this.props.attr.spd} kmod={this.props.kindred.spdmod}/>
      </Col>
      <Col sm={6}>
        <Attribute name="LK" data={this.props.attr.lk} kmod={this.props.kindred.lkmod}/>
      </Col>
      <Col sm={6}>
        <Attribute name="IQ" data={this.props.attr.iq} kmod={this.props.kindred.iqmod}/>
      </Col>
      <Col sm={6}>
        <Attribute name="WIZ" data={this.props.attr.wiz} kmod={this.props.kindred.wizmod}/>
      </Col>
      <Col sm={6}>
        <Attribute name="CHR" data={this.props.attr.chr} kmod={this.props.kindred.chrmod}/>
      </Col>
      <Col sm={12}>
        <PersonalAdds attr={this.props.attr} kindred={this.props.kindred} />
      </Col>
      <Col sm={12}>
        <CharacterLevel attr={this.props.attr} kindred={this.props.kindred} />
      </Col>
      </Row>
    );
  }
}

export default AttributeBox;
