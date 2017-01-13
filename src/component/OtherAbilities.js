import React from 'react';
import { Row, Col } from 'react-bootstrap';

class OtherAbilities extends React.Component {
  render(){
    var attnames = ['str','con','dex','spd','lk','iq','wiz','chr'];
    //var output = this.props.attr.str;
    //var output = this.props.attr[attnames[0]];
    var name;
    var output = '';
    for (name in this.props.attr){
       var att = this.props.attr[name];
       if(att.length > 3) {
         output = output + "Specialized " + name.toUpperCase();
       } 
    }
    return (
      <div>{output.toString()}
      </div>
    );
  }
}

export default OtherAbilities;
