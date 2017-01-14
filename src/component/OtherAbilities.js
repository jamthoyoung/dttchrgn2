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
    if (this.props.kindred.hasOwnProperty("abilities")){
     var a = this.props.kindred["abilities"];
     for(var i = 0; i < a.length; i++){
      output.push(a[i]); 
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
