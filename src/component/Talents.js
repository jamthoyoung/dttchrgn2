import React from 'react';
import { FormGroup, ControlLabel, FormControl, Modal, Glyphicon, Panel, Button, Row, Col } from 'react-bootstrap';

class Talents extends React.Component {
  constructor(props) {
   super(props);
   this.closeModal =  this.closeModal.bind(this);
   this.openModal =  this.openModal.bind(this);
   this.onChange =  this.onChange.bind(this);
   this.getSelectValues = this.getSelectValues.bind(this);
   this.state = { showModal : false };
  }
  closeModal(){
   this.setState({ showModal : false });
  }
  openModal(){
   this.setState({ showModal : true });
  }
  onChange(e){
    //console.log("Talent.onChange() " + e.target.value + "" + e.target.selectedOptions.toString())
    console.log("Talent.onChange() " + this.getSelectValues(e.target));
    this.props.selectTalents(this.getSelectValues(e.target));
  }
  // Return an array of the selected opion values
// select is an HTML select element
  getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;

    for (var i=0, iLen=options.length; i<iLen; i++) {
      opt = options[i];

      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    return result;
  }

  render(){
    var pheader = (
      <Row>
       <Col xs={9}>Talents</Col>
       <Col xs={3} bsClass="col-right">
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
        <FormGroup controlId="formControlSelectTalents">
          <ControlLabel>Talents</ControlLabel>
          <FormControl componentClass="select" multiple value={this.props.talents} onChange={this.onChange}>
          {this.props.talentlist.allIds.map(function(t,i){
            return <option value={t} key={i}>
                    {this.props.talentlist.byId[t].name}
                   </option>
          }, this)}
          </FormControl>
        </FormGroup>
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
