import React from 'react';
import { Modal, Glyphicon, Panel, Button, Row, Col } from 'react-bootstrap';

class Talents extends React.Component {
  constructor(props) {
   super(props);
   this.closeModal =  this.closeModal.bind(this);
   this.openModal =  this.openModal.bind(this);
   this.state = { showModal : false };
  }
  closeModal(){
   this.setState({ showModal : false });
  }
  openModal(){
   this.setState({ showModal : true });
  }
  render(){
    var pheader = (
      <Row>
       <Col xs={9}>Talents</Col>
       <Col xs={3}>
         <Button onClick={this.openModal} bsSize="xsmall">
           <Glyphicon glyph="edit"/>
         </Button>
       </Col>
      </Row>
    );
    return (
     <div>
     <Panel header={pheader}>
      <Row>
      {this.props.talents.map(function(t,i){
       return <Col key={i} sm={12}>
                 {this.props.talentlist.byId[t].name}
              </Col>
      }, this)}
      </Row>
     </Panel>
     <Modal show={this.state.showModal} onHide={this.closeModal}>
      <Modal.Header closeButton>
       <Modal.Title>Edit Talents</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Blah blah</h4>
        <p>alskdjf;skjdf;lsjd lskdj flskj fdl </p>
      </Modal.Body>
      <Modal.Footer>
       <Button onClick={this.closeModal}>Close</Button>
      </Modal.Footer>
     </Modal>
     </div>
    );
  }
}

export default Talents;
