import React from 'react';
import { Panel, Row, Col } from 'react-bootstrap';
import Multiselect from 'react-bootstrap-multiselect';

class Talents extends React.Component {
  constructor(props) {
   super(props);
   this.handleMulti = (e) => {
     let selectedOptions = this.refs.multiRef.refs.multiselect.selectedOptions;
     let arr = [];
     for (var i = 0; i < selectedOptions.length; i++) {
       arr.push(parseInt(selectedOptions[i].value)); //second console output
     }
     this.props.selectTalents(arr);
   }
  }

  render(){
    return (
     <div>
     <Panel header="Talents">
      <Row>
        <Col xs={12} sm={6}>
          <Multiselect ref="multiRef" onChange={this.handleMulti} data={this.props.multiselectitems} multiple/>
        </Col>
      </Row>
     </Panel>
     </div>
    );
  }
}

export default Talents;
