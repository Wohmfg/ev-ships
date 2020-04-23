import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Bar from './Bar'

class Compare extends Component {

  state = {
    manActive: false,
    attActive : false,
    defActive: false
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

  handleRemove = (removedShip) => {
    this.props.removeShip(removedShip)
  }

  render() {
    return(
      <Container>
        <Row>
          {
            this.props.comparisonShipss.map(ship => {
            return (
              <Col xs={12} md={4} key={ship.id}>
                <div className="shipcard-div" >
                  <div className="ship-name">{ship.faction} {ship.name}</div>
                  <div className="ShipType">{ship.type}</div>
                  <Bar percent={this.props.getStats(ship).attack} stat="ATTACK"/>
                  <Bar percent={this.props.getStats(ship).defence} stat="DEFENCE"/>
                  <Bar percent={this.props.getStats(ship).manoeuvreability} stat="MANOEUVRE"></Bar>
                  {this.state.manActive && (<br></br>)}
                  {this.state.manActive && (<p className="detailtext"><b>Guns</b>: {ship.guns} <b>Turrets</b>: {ship.turrets} <b>Space</b>: {ship.space} tonnes <b>Shields</b>: {ship.shields} <b>Armour</b>: {ship.armour}</p>)}
                  {this.state.manActive && (<p className="detailtext"><b>Speed</b>: {ship.speed} <b>Accel</b>: {ship.acceleration} <b>Turn</b>: {ship.turn} <b>Cargo</b>: {ship.cargo}</p>)}
                  <button className="remove-button" onClick={() => {this.handleRemove(ship)}}>Remove</button>
                  <button className="ship-button" onClick={() => {this.toggleState('manActive')}}>Details</button>
                  <p>{"\n"}</p>
                </div>
              </Col>
              )
            })
          }
        </Row>
      </Container>
  )};
}

export default Compare;
