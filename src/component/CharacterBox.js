import React from 'react';
import { Navbar, Nav, Form, Panel, Grid, Row, Col } from 'react-bootstrap';
import NameContainer from '../containers/NameContainer.js';
import AttributeBoxContainer from '../containers/AttributeBoxContainer.js';
import KindredInputContainer from '../containers/KindredInputContainer.js';
import RerollNavItemContainer from '../containers/RerollNavItemContainer.js';
import WeightContainer from '../containers/WeightContainer.js';
import HeightContainer from '../containers/HeightContainer.js';
import CharacterClass from './CharacterClass.js';
import GenderContainer from '../containers/GenderContainer.js';
import GoldContainer from '../containers/GoldContainer.js';
import OtherAbilities from './OtherAbilities.js';
import CharacterBackstory from './CharacterBackstory.js';
import Talents from './Talents.js';

class CharacterBox extends React.Component {
  constructor(props) {
    super(props);
    this.classChange = this.classChange.bind(this);
    this.backstoryChange = this.backstoryChange.bind(this);
    this.state = 
      this.props.initFormData; 
  }
  classChange(value){
    this.setState({class: value});
  }
  backstoryChange(value){
    for(var i = 0; i < this.props.backstory.length; i++) {
      // eslint-disable-next-line
      if(value == this.props.backstory[i].id){
        console.log(this.props.backstory[i]);
        this.setState({talents: this.props.backstory[i].talents
                       });
      }
    }
  }
  render(){
    return (
      <Grid fluid>
       <Row>
        <Navbar>
         <Navbar.Header>
          <Navbar.Brand>
            dttchargen
          </Navbar.Brand>
         </Navbar.Header>
        <Nav>
         <RerollNavItemContainer />
        </Nav>
      </Navbar>
      </Row>
      <Row>
      <Form>
           <Col xs={12} md={3}>
            <NameContainer />
           </Col>
           <Col xs={12} sm={4} md={3}>
            <KindredInputContainer 
               />
           </Col>
           <Col xs={12} sm={4} md={3}>
            <CharacterBackstory backstory={this.props.backstory}
              value={this.state.backstory.id}
              onChange={this.backstoryChange} />
           </Col>
            <Col xs={6} sm={4} md={3}>
              <CharacterClass 
                value={this.state.class}
                onChange={this.classChange} />
            </Col>
            <Col xs={6} sm={4} md={3}>
            <GenderContainer />
            </Col>
            </Form>
          </Row>
          <Row>
            <Col sm={4}>
              <Panel header="Stature">
            <Col sm={6}>
              <WeightContainer />
            </Col>
            <Col sm={6}>
              <HeightContainer />
            </Col>
             </Panel>
            </Col>
            <Col sm={4}>
            <Panel header="Prime Attributes">
              <AttributeBoxContainer />
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
           <Talents talents={this.state.talents} />
         </Col>
         <Col sm={4}>
            <Panel header="Weapons">
            </Panel>
         </Col>
         <Col sm={4}>
            <Panel header="Equipment">
              <GoldContainer />
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
