import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/button';
import Bar from './Bar'

class Ships extends Component {

  state = {
    manActive: false,
    attActive : false,
    defActive: false,
  }

  toggleState = (astate) => {
    const currentState = this.state;
    if (currentState[astate] === true) {
      currentState[astate] = false;
    } else {
      currentState[astate] = true;
    }
    this.setState({currentState})
  }

  handleCompare = (ship) => {
    this.props.addShip(ship)
  }

  render() {
    return(
      <Container>
        <Row>
        {
          this.props.shipss.map(ship => {
          if (this.props.factions.includes(ship.faction)) {
          return (
            <Col xs={4} key={ship.id}>
              <div className="ShipName">{ship.faction} {ship.name}</div>
              <div className="ShipType"><span onClick={() => this.toggleState('manActive')}>{ship.type} (see detailed stats)</span></div>
              <Bar percent={this.props.getStats(ship).attack} stat="ATTACK"/>
              <Bar percent={this.props.getStats(ship).defence} stat="DEFENCE"/>
              <Bar percent={this.props.getStats(ship).manoeuvreability} stat="MANOEUVRE"></Bar>
              {this.state.manActive && (<br></br>)}
              {this.state.manActive && (<p className="detailtext"><b>Guns</b>: {ship.guns} <b>Turrets</b>: {ship.turrets} <b>Space</b>: {ship.space} tonnes</p>)}
              {this.state.manActive && (<p className="detailtext"><b>Shields</b>: {ship.shields} <b>Armour</b>: {ship.armour}</p>)}
              {this.state.manActive && (<p className="detailtext"><b>Speed</b>: {ship.speed} <b>Accel</b>: {ship.acceleration} <b>Turn</b>: {ship.turn}</p>)}
              <p>{"\n"}</p>
              <Button onClick={() => {this.handleCompare(ship)}}>Compare</Button>
              <p>{"\n"}</p>
            </Col>
            )
          }
          else {
            return null
          }
        })
        }
        </Row>
      </Container>
  )};
}

export default Ships;
