import React from 'react';
import { Navbar, Nav, NavItem, Form, Panel, Grid, Row, Col } from 'react-bootstrap';
import CharacterName from './CharacterName.js';
import AttributeBox from './AttributeBox.js';
import CharacterKindred from './CharacterKindred.js';
import CharacterWeight from './CharacterWeight.js';
import CharacterHeight from './CharacterHeight.js';
import CharacterClass from './CharacterClass.js';
import CharacterGender from './CharacterGender.js';
import CharacterGold from './CharacterGold.js';
import OtherAbilities from './OtherAbilities.js';

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
    var gold = this.getNewAttributeValue(10,false).value;
    console.log("new wt + ht:" + wt + " " + ht); 
    this.setState( {attributes: newattributes, weight: wt, height: ht, gold: gold } );
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
      <Grid fluid="true">
       <Row>
        <Navbar>
         <Navbar.Header>
          <Navbar.Brand>
            dttchargen
          </Navbar.Brand>
         </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} 
            onClick={this.handleRerollClick} >Reroll</NavItem>
        </Nav>
      </Navbar>
      </Row>
      <Row>
      <Form>
           <Col xs={12} md={3}>
            <CharacterName name={this.state.name}
              onChange={this.nameChange} />
           </Col>
            <Col xs={12} sm={4} md={3}>
            <CharacterKindred kindredoptions={this.props.kindredlist}
              value={this.state.kindred.id}
              onChange={this.kindredChange} />
           </Col>
            <Col xs={6} sm={4} md={3}>
              <CharacterClass 
                value={this.state.class}
                onChange={this.classChange} />
            </Col>
            <Col xs={6} sm={4} md={3}>
            <CharacterGender
              value={this.state.gender}
              onChange={this.genderChange} />
            </Col>
            </Form>
          </Row>
          <Row>
            <Col sm={4}>
              <Panel header="Stature">
            <Col sm={6}>
              <CharacterWeight kindred={this.state.kindred} 
                         weight={this.state.weight} 
                         height={this.state.height}/>
            </Col>
            <Col sm={6}>
              <CharacterHeight kindred={this.state.kindred}
                         height={this.state.height} />
            </Col>
             </Panel>
            </Col>
            <Col sm={4}>
            <Panel header="Prime Attributes">
              <AttributeBox 
                attr={this.state.attributes} 
                kindred={this.state.kindred}/>
            </Panel>
            </Col>
         <Col sm={4}>
            <Panel header="Other Abilities">
             <OtherAbilities attr={this.state.attributes}
               kindred={this.state.kindred} />
            </Panel>
         </Col>
         <Col sm={4}>
            <Panel header="Portrait">
            </Panel>
         </Col>
         <Col sm={4}>
            <Panel header="Adventure Points">
            </Panel>
         </Col>
         <Col sm={4}>
            <Panel header="Talents">
            </Panel>
         </Col>
         <Col sm={4}>
            <Panel header="Weapons">
            </Panel>
         </Col>
         <Col sm={4}>
            <Panel header="Equipment">
              <CharacterGold
                gold={this.state.gold}/>
            </Panel>
         </Col>
         <Col sm={4}>
            <Panel header="Spells">
            </Panel>
         </Col>
        </Row>
     </Grid>
    );
  }
}

export default CharacterBox;
