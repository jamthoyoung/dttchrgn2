import React from 'react';
import { Row, Col } from 'react-bootstrap';

class OtherAbilities extends React.Component {
  render(){
    return (
      <Row>
      {this.props.abilities.map(function(message, index){
       return <Col key={index} sm={12}>{message}</Col>;
      })}
      </Row>
    );
  }
}

export default OtherAbilities;
