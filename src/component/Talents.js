import React from 'react';
import { Row, Col } from 'react-bootstrap';

class Talents extends React.Component {
  render(){
    return (
      <Row>
      {this.props.talents.map(function(t){
       return <Col sm={12}>{t}</Col>;
      })}
      </Row>
    );
  }
}

export default Talents;
