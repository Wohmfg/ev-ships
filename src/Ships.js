import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Bar from './Bar'

class Ships extends Component {

  state = {
    manActive: false,
    attActive : false,
    defActive: false,
    content: ""
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

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }

  render() {
    return(
      <Container>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} value={this.state.content} placeholder="Search..."/>
          </form>
        </div>
        <br></br>
        <Row>
        {
          this.props.shipss.map(ship => {
          if (this.props.factions.includes(ship.faction) && ship.faction.concat(" ", ship.name).toLowerCase(null).includes(this.state.content)) {
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
                <p>{"\n"}</p>
                <button className="ship-button" onClick={() => {this.handleCompare(ship)}}>Compare</button>
                <button className="ship-button" onClick={() => {this.toggleState('manActive')}}>Details</button>
                <p>{"\n"}</p>
              </div>
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
