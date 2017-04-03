import React from 'react';
import { Well, Form, Panel, Grid, Row, Col, PageHeader } from 'react-bootstrap';
import NameContainer from '../containers/NameContainer.js';
import AgeContainer from '../containers/AgeContainer.js';
import HairContainer from '../containers/HairContainer.js';
import AttributeBoxContainer from '../containers/AttributeBoxContainer.js';
import KindredInputContainer from '../containers/KindredInputContainer.js';
import RerollContainer from '../containers/RerollContainer.js';
import WeightContainer from '../containers/WeightContainer.js';
import HeightContainer from '../containers/HeightContainer.js';
import ClassContainer from '../containers/ClassContainer.js';
import GenderContainer from '../containers/GenderContainer.js';
import GoldContainer from '../containers/GoldContainer.js';
import PersonalAddsContainer from '../containers/PersonalAddsContainer.js';
import LevelContainer from '../containers/LevelContainer.js';
import PrintContainer from '../containers/PrintContainer.js'
import Trademark from './Trademark.js'
import PortraitContainer from '../containers/PortraitContainer.js'

class CharacterBox extends React.Component {
  render(){
    return (
      <Grid fluid>
      <Row>
        <Col xs={12}>
          <PageHeader>
            Character Dice Roller for Deluxe Tunnels and Trolls
          </PageHeader>
        </Col>
      </Row>
      <Row>
        <Form>
          <Col xs={6} sm={4} md={3} lg={2}>
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
            <AgeContainer />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2}>
            <HairContainer />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2}>
            <RerollContainer />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2}>
            <PortraitContainer />
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
            <Row>
              <Col xs={12} bsClass="col-centered">
                <PrintContainer/>
              </Col>
            </Row>
          </Panel>
          <Row>
            <Col xs={12} bsClass="col-centered">
              <Trademark/>
            </Col>
          </Row>
     </Grid>
    );
  }
}

export default CharacterBox;
