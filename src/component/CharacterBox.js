import React from 'react';
import { Well, Navbar, Nav, Form, Panel, Grid, Row, Col } from 'react-bootstrap';
import NameContainer from '../containers/NameContainer.js';
import AttributeBoxContainer from '../containers/AttributeBoxContainer.js';
import KindredInputContainer from '../containers/KindredInputContainer.js';
import RerollContainer from '../containers/RerollContainer.js';
import WeightContainer from '../containers/WeightContainer.js';
import HeightContainer from '../containers/HeightContainer.js';
import ClassContainer from '../containers/ClassContainer.js';
import GenderContainer from '../containers/GenderContainer.js';
import GoldContainer from '../containers/GoldContainer.js';
import OtherAbilitiesContainer from '../containers/OtherAbilitiesContainer.js';
import PersonalAddsContainer from '../containers/PersonalAddsContainer.js';
import LevelContainer from '../containers/LevelContainer.js';

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
        <Form>
          <Col xs={6} sm={4} md={3} md={2}>
            <NameContainer />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2}>
            <KindredInputContainer />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2}>
            <ClassContainer />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2}>
            <GenderContainer />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2}>
            <RerollContainer />
          </Col>
          </Form>
        </Row>
          <Panel header="Generated Results">
            <Well>
              <AttributeBoxContainer />
            </Well>
            <Well>
              <Row>
                <Col xs={6} sm={4} md={3} lg={2}>
                  <PersonalAddsContainer />
                </Col>
                <Col xs={6} sm={4} md={3} lg={2}>
                  <LevelContainer />
                </Col>
                <Col xs={6} sm={4} md={3} lg={2}>
                  <WeightContainer />
                </Col>
                <Col xs={6} sm={4} md={3} lg={2}>
                  <HeightContainer />
                </Col>
                <Col xs={6} sm={4} md={3} lg={2}>
                  <GoldContainer />
                </Col>
              </Row>
            </Well>
            <Panel header="Other Abilities">
              <OtherAbilitiesContainer />
            </Panel>
          </Panel>
     </Grid>
    );
  }
}

export default CharacterBox;
