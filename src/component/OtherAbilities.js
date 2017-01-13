import React from 'react';
import { Row, Col } from 'react-bootstrap';

class OtherAbilities extends React.Component {
  render(){
    var name;
    var output = [];
    for (name in this.props.attr){
      if(this.props.attr.hasOwnProperty(name)){
       var att = this.props.attr[name];
       if(att.length > 3) {
         output.push("Specialized " + name.toUpperCase());
       } 
      }
    }
    return (
      <Row>
      {output.map(function(message){
       return <Col sm={12}>{message}</Col>;
      })}
      </Row>
    );
  }
}

export default OtherAbilities;
