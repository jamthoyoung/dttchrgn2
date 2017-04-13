import React from 'react';
import { FormGroup, ControlLabel, FormControl, Modal, Glyphicon, Panel, Button, Row, Col } from 'react-bootstrap';
import Multiselect from 'react-bootstrap-multiselect';

class Talents extends React.Component {
  constructor(props) {
   super(props);
   this.closeModal =  this.closeModal.bind(this);
   this.openModal =  this.openModal.bind(this);
   this.onChange =  this.onChange.bind(this);
   this.getSelectValues = this.getSelectValues.bind(this);
   this.compareTalents = this.compareTalents.bind(this);
   this.state = {
     showModal : false
   };
   this.handleMulti = (e) => {
     console.log('multiselect handled:');
     let selected = [...this.refs.multiRef]
      .filter(option => option.selected)
      .map(option => option.value)
    console.log('multiselect handled:' + selected);
   }
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
        <Col xs={12} sm={6}>
          <Multiselect ref="multiRef" onChange={this.handleMulti} data={this.props.multiselectitems} multiple/>
        </Col>
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
          <FormControl componentClass="select" multiple value={this.props.talents} onChange={this.onChange}>
          {this.props.talentlist.regularIds.sort(this.compareTalents).map(function(t,i){
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
