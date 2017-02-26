import React from 'react';
import { Navbar, Nav, Form, Panel, Grid, Row, Col } from 'react-bootstrap';
import NameContainer from '../containers/NameContainer.js';
import AttributeBoxContainer from '../containers/AttributeBoxContainer.js';
import KindredInputContainer from '../containers/KindredInputContainer.js';
import RerollNavItemContainer from '../containers/RerollNavItemContainer.js';
import WeightContainer from '../containers/WeightContainer.js';
import HeightContainer from '../containers/HeightContainer.js';
import ClassContainer from '../containers/ClassContainer.js';
import GenderContainer from '../containers/GenderContainer.js';
import GoldContainer from '../containers/GoldContainer.js';
import OtherAbilitiesContainer from '../containers/OtherAbilitiesContainer.js';

class CharacterBox extends React.Component {
  constructor(props) {
    super(props);
    this.backstoryChange = this.backstoryChange.bind(this);
    this.state =
      this.props.initFormData;
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
            <KindredInputContainer />
           </Col>
            <Col xs={6} sm={4} md={3}>
              <ClassContainer />
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
             <OtherAbilitiesContainer />
            </Panel>
         </Col>
         <Col sm={4}>
            <Panel header="Gold">
              <GoldContainer />
            </Panel>
         </Col>
        </Row>
     </Grid>
    );
  }
}

export default CharacterBox;
