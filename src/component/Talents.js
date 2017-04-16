import React from 'react';
import { FormGroup, ControlLabel, FormControl, Modal, Glyphicon, Panel, Button, Row, Col } from 'react-bootstrap';

class Talents extends React.Component {
  constructor(props) {
   super(props);
   this.closeModal =  this.closeModal.bind(this);
   this.openModal =  this.openModal.bind(this);
   this.onChange =  this.onChange.bind(this);
   this.getSelectValues = this.getSelectValues.bind(this);
   this.compareTalents = this.compareTalents.bind(this);
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

  compareTalents(a,b){
    if(this.props.talentlist.byId[a].name < this.props.talentlist.byId[b].name){
      return -1;
    } else if (this.props.talentlist.byId[a].name > this.props.talentlist.byId[b].name){
      return 1;
    } else {
      return 0;
    }
  }


  render(){
    console.log('Rerender with talents:' + this.props.talents.toString());
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
    var opts = (
      this.props.talentlist.allGroups.map(function(gid,gi){
        return <optgroup label={this.props.talentlist.groups[gid].name} key={gi}>
          {
            this.props.talentlist.groups[gid].talentIds.map(function(tid,id){
              console.log('tid:'+tid+' talents:' + this.props.talents + 'selected:' + this.props.talents.includes(tid));
              return <option label={this.props.talentlist.byId[tid].name} key={id}>{tid}</option>
            }, this)
          }
        </optgroup>
      },this)
    );
    return (
     <div>
     <Panel header={pheader}>
      <Row>
      {this.props.talents.map(function(t,i){
       return <Col key={i} xs={12} sm={6}>
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
          <FormControl componentClass="select" multiple onChange={this.onChange} value={this.props.talents}>
          {opts}
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
