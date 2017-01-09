import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Panel, Grid, Row, Col } from 'react-bootstrap';
import CharacterName from './CharacterName.js';
import CharacterLevel from './CharacterLevel.js';
import AttributeBox from './AttributeBox.js';

class CharacterBox extends React.Component {
  constructor(props) {
    super(props);
    this.rollOneDice = this.rollOneDice.bind(this);
    this.getMultipleDice = this.getMultipleDice.bind(this);
    this.getNewAttributeValue = this.getNewAttributeValue.bind(this);
    this.handleRerollClick = this.handleRerollClick.bind(this);
    this.genderChange = this.genderChange.bind(this);
    this.classChange = this.classChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.kindredChange = this.kindredChange.bind(this);
    this.state = 
      this.props.initFormData; 
  }
  rollOneDice(){
    return Math.ceil(Math.random() * 6);
  }
  getMultipleDice(numberofdice, taro){
    var dicearray = [];
    var i = 0;
    while(i < numberofdice){
      dicearray.push(this.rollOneDice());
      i += 1;
    }
    if (taro){
      var firstvalue = dicearray[0];
      var issame = true;
      for(var x = 1; x < numberofdice; x++){
	if(firstvalue !== dicearray[x]){
	  issame = false;
	}
      }
      if(issame){
	dicearray = dicearray.concat(this.getMultipleDice(numberofdice,true));
      }
    }
    return dicearray;
  }
  getNewAttributeValue(mod,taro){
    var dicearray = this.getMultipleDice(3,taro);
    var total = dicearray.reduce(
      function(previousValue, currentValue, currentIndex, array) {
	return previousValue + currentValue;
      });
    if(mod > 1){
      total = Math.floor(total * mod);
    } else {
      total = Math.ceil(total * mod);
    }
    console.log(dicearray + " * " + mod);
    return { value: total, specialized : false};
  }
  handleRerollClick() {
    console.log("prestate:" + this.state);
    var newattributes = {
      str: this.getMultipleDice(3,true),
      con: this.getMultipleDice(3,true),
      dex: this.getMultipleDice(3,true),
      spd: this.getMultipleDice(3,true),
      lk: this.getMultipleDice(3,true),
      iq: this.getMultipleDice(3,true),
      wiz: this.getMultipleDice(3,true),
      chr: this.getMultipleDice(3,true)
    };
    var wt = this.getNewAttributeValue(this.state.kindred.weightmod,false).value;
    var ht = this.getNewAttributeValue(this.state.kindred.heightmod,false).value;
    console.log("new wt + ht:" + wt + " " + ht); 
    this.setState( {attributes: newattributes, weight: wt, height: ht } );
  } 
  genderChange(value){
    this.setState({gender: value});
  }
  classChange(value){
    this.setState({class: value});
  }
  nameChange(value){
    this.setState({name: value});
  }
  kindredChange(value){
    for(var i = 0; i < this.props.kindredlist.length; i++) {
      // eslint-disable-next-line
      if(value == this.props.kindredlist[i].id){
        console.log(this.props.kindredlist[i]);
        this.setState({kindred: this.props.kindredlist[i]});
      }
    }
  }
  render(){
    return (
          <Form>
      <Grid fluid="true">
        <Col sm={6}>
          <Row>
            <Col xs={12}>
              <Button bsStyle="primary" 
                onClick={this.handleRerollClick} block>Reroll</Button>
            </Col>
          </Row>
          <Row>
           <Col xs={12}>
            <CharacterName name={this.state.name}
              onChange={this.nameChange} />
           </Col>
          </Row>
          <Row>
            <Col sm={12}>
            <CharacterKindred kindredoptions={this.props.kindredlist}
              value={this.state.kindred.id}
              onChange={this.kindredChange} />
           </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <CharacterClass 
                value={this.state.class}
                onChange={this.classChange} />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
            <CharacterGender
              value={this.state.gender}
              onChange={this.genderChange} />
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <CharacterWeight kindred={this.state.kindred} 
                         weight={this.state.weight} 
                         height={this.state.height}/>
            </Col>
            <Col sm={4}>
              <CharacterHeight kindred={this.state.kindred}
                         height={this.state.height} />
            </Col>
            <Col sm={4}>
              <CharacterLevel 
                attr={this.state.attributes} 
                kindred={this.state.kindred}/>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
            <Panel header="Prime Attributes">
              <AttributeBox 
                attr={this.state.attributes} 
                kindred={this.state.kindred}/>
            </Panel>
            </Col>
          </Row>
        </Col>
        <Col sm={6}>
         <Row>Portrait</Row>
         <Row>Adventure Points</Row>
         <Row>Talents</Row>
         <Row>Weapons</Row>
         <Row>Spells</Row>
        </Col>
      </Grid>
            </Form>
    );
  }
}

export default CharacterBox;

class CharacterGender extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.props.onChange(event.target.value);
  }
  render(){
    return (
        <FormGroup controlId="CharacterGenderInput">
          <ControlLabel>Gender</ControlLabel>
          <FormControl 
            componentClass="select" 
            onChange={this.onChange}
            placeholder="Please select"
            value={this.props.value}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </FormControl>
        </FormGroup>
    );
  }
}

class CharacterClass extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.props.onChange(event.target.value);
  }
  render(){
    return (
        <FormGroup controlId="CharacterClassInput">
          <ControlLabel>Class</ControlLabel>
          <FormControl 
            componentClass="select" 
            onChange={this.onChange}
            placeholder="Please select"
            value={this.props.value}>
            <option value="Warrior">Warrior</option>
            <option value="Wizard">Wizard</option>
            <option value="Rogue">Rogue</option>
          </FormControl>
        </FormGroup>
    );
  }
}

class CharacterHeight extends React.Component {
  render(){
    var heightInCm = Math.round(
       (126.4 + (this.props.height*5.6)) * this.props.kindred.heightmod
                               );
    return (
      <span>
        Height: {heightInCm} cm
      </span>
    );
  }
}

class CharacterWeight extends React.Component {
  render(){
    var heightInCm = 126.4 + (this.props.height*5.6);
    // ideal weight for male uses devine formula
    var idealWeightKg = Math.round(
          (50 + (0.9055118 * (heightInCm-152.4))) * this.props.kindred.weightmod
                           );
    return (
      <span>
        Weight: {idealWeightKg} kg
      </span>
    );
  }
}

class CharacterKindred extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.props.onChange(event.target.value);
  }
  render(){
    return (
        <FormGroup controlId="CharacterKindredInput">
          <ControlLabel>Kindred</ControlLabel>
          <FormControl 
            componentClass="select" 
            onChange={this.onChange}
            placeholder="Please select"
            value={this.props.value}>
          {this.props.kindredoptions.map(function(kin,key){
            return <option key={key} value={kin.id}>{kin.name}</option>
          })}
          </FormControl>
        </FormGroup>
    );
  }
}
