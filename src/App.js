import React, { Component } from 'react';
import Ships from './Ships';
import Compare from './Compare';
import CheckboxContainer from './CheckboxContainer';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// TO ADD
// graph stats - DONE
// extend stats when clicked on - DONE
// filter for faction - DONE
// prettify the whole thing - DONE
// search bar DONE
// colour code ships by faction
// sort by stat, name


class App extends Component {
  state = {
    ships: [
      {id: 1, name: 'Viper', faction: 'Federation', type: 'Fighter', speed: 525, acceleration: 850, turn: 80, shields: 60, armour: 30, guns: 3, turrets: 0, space: 21, cargo: 5, attmod: 1, defmod: 1, manmod: 1},
      {id: 2, name: 'Anaconda', faction: 'Federation', type: 'Fighter', speed: 450, acceleration: 650, turn: 70, shields: 90, armour: 45, guns: 3, turrets: 0, space: 32, cargo: 10, attmod: 1, defmod: 1, manmod: 1},
      {id: 3, name: 'Scout Ship', faction: 'Federation', type: 'Heavy Fighter', speed: 475, acceleration: 600, turn: 60, shields: 250, armour: 200, guns: 5, turrets: 1, space: 46, cargo: 25, attmod: 1, defmod: 1, manmod: 1},
      {id: 4, name: 'Patrol Boat', faction: 'Federation', type: 'Gunship', speed: 400, acceleration: 600, turn: 55, shields: 350, armour: 300, guns: 5, turrets: 2, space: 127, cargo: 25, attmod: 1, defmod: 1, manmod: 1},
      {id: 5, name: 'RAGE Gunboat', faction: 'Federation', type: 'Gunship', speed: 425, acceleration: 575, turn: 45, shields: 500, armour: 400, guns: 5, turrets: 2, space: 130, cargo: 20, attmod: 1, defmod: 1, manmod: 1},
      {id: 6, name: 'Destroyer', faction: 'Federation', type: 'Destroyer', speed: 190, acceleration: 260, turn: 30, shields: 800, armour: 750, guns: 4, turrets: 4, space: 185, cargo: 50, attmod: 1, defmod: 1, manmod: 1},
      {id: 7, name: 'Carrier', faction: 'Federation', type: 'Battleship', speed: 130, acceleration: 150, turn: 20, shields: 1400, armour: 1000, guns: 6, turrets: 4, space: 463, cargo: 100, attmod: 1, defmod: 1, manmod: 1},
      {id: 8, name: 'Firebird', faction: 'Auroran', type: 'Fighter', speed: 500, acceleration: 800, turn: 80, shields: 25, armour: 75, guns: 3, turrets: 0, space: 13, cargo: 5, attmod: 1, defmod: 1, manmod: 1},
      {id: 9, name: 'Phoenix', faction: 'Auroran', type: 'Fighter', speed: 440, acceleration: 650, turn: 60, shields: 30, armour: 120, guns: 3, turrets: 0, space: 40, cargo: 10, attmod: 1, defmod: 1, manmod: 1},
      {id: 10, name: 'Firebird', faction: 'Auroran', type: 'Heavy Fighter', speed: 500, acceleration: 800, turn: 80, shields: 25, armour: 75, guns: 3, turrets: 0, space: 13, cargo: 5, attmod: 1, defmod: 1, manmod: 1},
      {id: 11, name: 'Argosy', faction: 'Auroran', type: 'Light Freighter', speed: 250, acceleration: 350, turn: 35, shields: 225, armour: 300, guns: 4, turrets: 2, space: 47, cargo: 50, attmod: 1, defmod: 1, manmod: 1},
      {id: 12, name: 'Abomination', faction: 'Auroran', type: 'Gunship', speed: 320, acceleration: 430, turn: 40, shields: 185, armour: 400, guns: 4, turrets: 2, space: 96, cargo: 20, attmod: 1, defmod: 1, manmod: 1},
      {id: 13, name: 'Enterprise', faction: 'Auroran', type: 'Freighter', speed: 200, acceleration: 200, turn: 25, shields: 300, armour: 600, guns: 4, turrets: 2, space: 74, cargo: 250, attmod: 1, defmod: 1, manmod: 1},
      {id: 14, name: 'Cruiser', faction: 'Auroran', type: 'Cruiser', speed: 200, acceleration: 250, turn: 25, shields: 200, armour: 1650, guns: 6, turrets: 4, space: 343, cargo: 75, attmod: 1, defmod: 1, manmod: 1},
      {id: 15, name: 'Carrier', faction: 'Auroran', type: 'Battleship', speed: 100, acceleration: 130, turn: 20, shields: 400, armour: 1800, guns: 4, turrets: 6, space: 518, cargo: 50, attmod: 1, defmod: 1, manmod: 1},
      {id: 16, name: 'Thunderforge', faction: 'Auroran', type: 'Light Battleship', speed: 340, acceleration: 395, turn: 20, shields: 700, armour: 1100, guns: 8, turrets: 6, space: 273, cargo: 75, attmod: 1, defmod: 1, manmod: 1},
      {id: 17, name: 'Sprite', faction: 'Polaris', type: 'Freighter', speed: 300, acceleration: 300, turn: 20, shields: 300, armour: 40, guns: 1, turrets: 0, space: 0, cargo: 500, attmod: 1, defmod: 1, manmod: 1},
      {id: 18, name: 'Cambrian', faction: 'Polaris', type: 'Heavy Freighter', speed: 250, acceleration: 200, turn: 20, shields: 675, armour: 75, guns: 1, turrets: 0, space: 0, cargo: 3500, attmod: 1, defmod: 1, manmod: 1},
      {id: 19, name: 'Manta', faction: 'Polaris', type: 'Fighter', speed: 590, acceleration: 1075, turn: 100, shields: 100, armour: 50, guns: 1, turrets: 0, space: 30, cargo: 15, attmod: 3, defmod: 1.5, manmod: 1},
      {id: 20, name: 'Striker', faction: 'Polaris', type: 'Gunship', speed: 330, acceleration: 600, turn: 70, shields: 600, armour: 300, guns: 2, turrets: 1, space: 72, cargo: 20, attmod: 2, defmod: 1.5, manmod: 1},
      {id: 21, name: 'Zephyr', faction: 'Polaris', type: 'Stealth Gunship', speed: 400, acceleration: 500, turn: 60, shields: 185, armour: 750, guns: 2, turrets: 1, space: 83, cargo: 50, attmod: 2, defmod: 1.5, manmod: 1},
      {id: 22, name: 'Dragon', faction: 'Polaris', type: 'Light Destroyer', speed: 325, acceleration: 450, turn: 50, shields: 450, armour: 225, guns: 2, turrets: 1, space: 65, cargo: 50, attmod: 2, defmod: 1.5, manmod: 1},
      {id: 23, name: 'Arachnid', faction: 'Polaris', type: 'Destroyer', speed: 300, acceleration: 450, turn: 60, shields: 825, armour: 480, guns: 2, turrets: 2, space: 117, cargo: 25, attmod: 2, defmod: 1.5, manmod: 1},
      {id: 24, name: 'Scarab', faction: 'Polaris', type: 'Cruiser', speed: 250, acceleration: 410, turn: 50, shields: 940, armour: 565, guns: 4, turrets: 3, space: 247, cargo: 100, attmod: 2, defmod: 1.5, manmod: 1},
      {id: 25, name: 'Raven', faction: 'Polaris', type: 'Heavy Battleship', speed: 225, acceleration: 350, turn: 40, shields: 1800, armour: 900, guns: 7, turrets: 5, space: 358, cargo: 200, attmod: 1.3, defmod: 1.5, manmod: 1},
      {id: 26, name: 'Cargo Drone', faction: 'Neutral', type: 'Light Freighter Droid', speed: 400, acceleration: 200, turn: 20, shields: 20, armour: 20, guns: 0, turrets: 0, space: 0, cargo: 10, attmod: 1, defmod: 1, manmod: 1},
      {id: 27, name: 'Shuttle', faction: 'Neutral', type: 'Light Freighter', speed: 400, acceleration: 500, turn: 40, shields: 30, armour: 30, guns: 2, turrets: 0, space: 11, cargo: 10, attmod: 1, defmod: 1, manmod: 1},
      {id: 28, name: 'Heavy Shuttle', faction: 'Neutral', type: 'Light Freighter', speed: 390, acceleration: 485, turn: 39, shields: 45, armour: 45, guns: 2, turrets: 0, space: 15, cargo: 15, attmod: 1, defmod: 1, manmod: 1},
      {id: 29, name: 'Asteroid Miner', faction: 'Neutral', type: 'Light Freighter and Miner', speed: 300, acceleration: 200, turn: 35, shields: 100, armour: 40, guns: 6, turrets: 0, space: 37, cargo: 100, attmod: 1, defmod: 1, manmod: 1},
      {id: 30, name: 'Star Liner', faction: 'Neutral', type: 'Tourism Freighter', speed: 200, acceleration: 350, turn: 35, shields: 650, armour: 150, guns: 2, turrets: 0, space: 46, cargo: 120, attmod: 1, defmod: 1, manmod: 1},
      {id: 31, name: 'Terrapin', faction: 'Neutral', type: 'Light Freighter', speed: 175, acceleration: 250, turn: 35, shields: 225, armour: 75, guns: 2, turrets: 1, space: 23, cargo: 125, attmod: 1, defmod: 1, manmod: 1},
      {id: 32, name: 'Pegasus', faction: 'Neutral', type: 'Freighter', speed: 150, acceleration: 150, turn: 25, shields: 400, armour: 110, guns: 1, turrets: 1, space: 40, cargo: 1000, attmod: 1, defmod: 1, manmod: 1},
      {id: 33, name: 'Leviathan', faction: 'Neutral', type: 'Heavy Freighter', speed: 100, acceleration: 50, turn: 10, shields: 450, armour: 150, guns: 8, turrets: 8, space: 20, cargo: 4000, attmod: 1, defmod: 1, manmod: 1},
      {id: 34, name: 'Valkyrie', faction: 'Neutral', type: 'Light Freighter and Gunship', speed: 450, acceleration: 500, turn: 40, shields: 400, armour: 120, guns: 5, turrets: 1, space: 50, cargo: 20, attmod: 1, defmod: 1, manmod: 1},
      {id: 35, name: 'Starbridge', faction: 'Neutral', type: 'Light Freighter and Gunship', speed: 400, acceleration: 550, turn: 50, shields: 430, armour: 135, guns: 4, turrets: 2, space: 66, cargo: 30, attmod: 1, defmod: 1, manmod: 1},
      {id: 36, name: 'Mod Starbridge', faction: 'Neutral', type: 'Light Freighter and Gunship', speed: 450, acceleration: 620, turn: 55, shields: 465, armour: 185, guns: 6, turrets: 2, space: 77, cargo: 20, attmod: 1, defmod: 1, manmod: 1},
      {id: 37, name: 'Viper', faction: 'Neutral', type: 'Fighter', speed: 525, acceleration: 900, turn: 80, shields: 45, armour: 25, guns: 2, turrets: 0, space: 16, cargo: 5, attmod: 1, defmod: 1, manmod: 1},
      {id: 38, name: 'Lightning', faction: 'Neutral', type: 'Fighter', speed: 500, acceleration: 675, turn: 55, shields: 90, armour: 50, guns: 6, turrets: 0, space: 31, cargo: 20, attmod: 1, defmod: 1, manmod: 1},
      {id: 39, name: 'Thunderhead', faction: 'Neutral', type: 'Heavy Fighter', speed: 390, acceleration: 475, turn: 50, shields: 110, armour: 185, guns: 5, turrets: 0, space: 45, cargo: 15, attmod: 1, defmod: 1, manmod: 1},
      {id: 40, name: 'IDA Frigate', faction: 'Neutral', type: 'Light Cruiser', speed: 200, acceleration: 275, turn: 30, shields: 525, armour: 750, guns: 4, turrets: 4, space: 117, cargo: 250, attmod: 1, defmod: 1, manmod: 1},
      {id: 41, name: 'Kestrel', faction: 'Neutral', type: 'Destroyer', speed: 360, acceleration: 500, turn: 45, shields: 1500, armour: 1500, guns: 6, turrets: 4, space: 170, cargo: 50, attmod: 1, defmod: 1, manmod: 1},
      {id: 42, name: 'Viper', faction: 'Pirate', type: 'Fighter', speed: 500, acceleration: 800, turn: 70, shields: 60, armour: 40, guns: 3, turrets: 0, space: 14, cargo: 15, attmod: 1, defmod: 1, manmod: 1},
      {id: 43, name: 'Argosy', faction: 'Pirate', type: 'Light Freighter', speed: 260, acceleration: 375, turn: 30, shields: 230, armour: 315, guns: 5, turrets: 2, space: 44, cargo: 30, attmod: 1, defmod: 1, manmod: 1},
      {id: 44, name: 'Thunderhead', faction: 'Pirate', type: 'Heavy Figher', speed: 475, acceleration: 625, turn: 50, shields: 125, armour: 210, guns: 5, turrets: 0, space: 46, cargo: 10, attmod: 1, defmod: 1, manmod: 1},
      {id: 45, name: 'Enterprise', faction: 'Pirate', type: 'Freighter Warship', speed: 210, acceleration: 210, turn: 25, shields: 400, armour: 645, guns: 4, turrets: 3, space: 115, cargo: 225, attmod: 1, defmod: 1, manmod: 1},
      {id: 46, name: 'Valkyrie', faction: 'Pirate', type: 'Gunship', speed: 475, acceleration: 550, turn: 40, shields: 410, armour: 130, guns: 6, turrets: 2, space: 57, cargo: 20, attmod: 1, defmod: 1, manmod: 1},
      {id: 47, name: 'Starbridge', faction: 'Pirate', type: 'Gunship', speed: 410, acceleration: 560, turn: 50, shields: 440, armour: 140, guns: 6, turrets: 1, space: 64, cargo: 20, attmod: 1, defmod: 1, manmod: 1},
      {id: 48, name: 'Manticore', faction: 'Pirate', type: 'Destroyer', speed: 200, acceleration: 300, turn: 30, shields: 500, armour: 850, guns: 8, turrets: 4, space: 307, cargo: 500, attmod: 1, defmod: 1, manmod: 1},
      {id: 49, name: 'Carrier', faction: 'Pirate', type: 'Battleship', speed: 200, acceleration: 275, turn: 30, shields: 725, armour: 825, guns: 6, turrets: 4, space: 421, cargo: 75, attmod: 1, defmod: 1, manmod: 1},
      {id: 50, name: 'The Unrelenting', faction: 'Pirate', type: 'Battleship', speed: 235, acceleration: 275, turn: 35, shields: 975, armour: 1125, guns: 8, turrets: 6, space: 903, cargo: 100, attmod: 1, defmod: 1, manmod: 1},
      {id: 51, name: 'Dart', faction: 'Vell-os', type: 'Fighter', speed: 600, acceleration: 1250, turn: 100, shields: 150, armour: 8, guns: 2, turrets: 2, space: 10, cargo: 5, attmod: 1.5, defmod: 1, manmod: 1},
      {id: 52, name: 'Arrow', faction: 'Vell-os', type: 'Gunship', speed: 425, acceleration: 650, turn: 60, shields: 990, armour: 30, guns: 2, turrets: 2, space: 20, cargo: 60, attmod: 2.5, defmod: 1, manmod: 1},
      {id: 53, name: 'Javelin', faction: 'Vell-os', type: 'Destroyer', speed: 375, acceleration: 500, turn: 40, shields: 1740, armour: 60, guns: 2, turrets: 2, space: 50, cargo: 100, attmod: 3.5, defmod: 1, manmod: 1},
      {id: 54, name: 'Viper', faction: 'Rebel', type: 'Fighter', speed: 500, acceleration: 900, turn: 80, shields: 70, armour: 40, guns: 3, turrets: 0, space: 19, cargo: 10, attmod: 1, defmod: 1, manmod: 1},
      {id: 55, name: 'Lightning', faction: 'Rebel', type: 'Fighter', speed: 530, acceleration: 750, turn: 60, shields: 200, armour: 60, guns: 7, turrets: 0, space: 37, cargo: 20, attmod: 1, defmod: 1, manmod: 1},
      {id: 56, name: 'Thunderhead', faction: 'Rebel', type: 'Heavy Fighter', speed: 460, acceleration: 630, turn: 65, shields: 185, armour: 185, guns: 6, turrets: 0, space: 74, cargo: 15, attmod: 1, defmod: 1, manmod: 1},
      {id: 57, name: 'Valkyrie', faction: 'Rebel', type: 'Gunship', speed: 485, acceleration: 550, turn: 45, shields: 425, armour: 140, guns: 6, turrets: 2, space: 75, cargo: 20, attmod: 1, defmod: 1, manmod: 1},
      {id: 58, name: 'Starbridge', faction: 'Rebel', type: 'Gunship', speed: 420, acceleration: 580, turn: 55, shields: 445, armour: 145, guns: 5, turrets: 2, space: 100, cargo: 20, attmod: 1, defmod: 1, manmod: 1},
      {id: 59, name: 'IDA Frigate', faction: 'Rebel', type: 'Light Cruiser', speed: 215, acceleration: 300, turn: 35, shields: 625, armour: 850, guns: 6, turrets: 4, space: 341, cargo: 50, attmod: 1, defmod: 1, manmod: 1},
      {id: 60, name: 'Destroyer', faction: 'Rebel', type: 'Destroyer', speed: 200, acceleration: 265, turn: 30, shields: 765, armour: 775, guns: 6, turrets: 3, space: 233, cargo: 50, attmod: 1, defmod: 1, manmod: 1},
      {id: 61, name: 'Dragon', faction: 'Rebel', type: 'Light Destroyer', speed: 325, acceleration: 450, turn: 50, shields: 450, armour: 225, guns: 3, turrets: 1, space: 76, cargo: 50, attmod: 1.5, defmod: 1, manmod: 1},
      {id: 62, name: 'Wraith Child', faction: 'Alien', type: 'Heavy Fighter', speed: 450, acceleration: 675, turn: 80, shields: 150, armour: 150, guns: 1, turrets: 0, space: 5, cargo: 0, attmod: 4, defmod: 1.5, manmod: 1},
      {id: 63, name: 'Wraith Youth', faction: 'Alien', type: 'Gunship', speed: 375, acceleration: 575, turn: 60, shields: 300, armour: 300, guns: 1, turrets: 0, space: 8, cargo: 0, attmod: 7, defmod: 1.5, manmod: 1},
      {id: 64, name: 'Wraith Adult', faction: 'Alien', type: 'Destroyer', speed: 350, acceleration: 550, turn: 40, shields: 600, armour: 600, guns: 1, turrets: 0, space: 5, cargo: 0, attmod: 11, defmod: 1.5, manmod: 1},
      {id: 65, name: 'Hyperioid', faction: 'Alien', type: 'Heavy Gunship', speed: 200, acceleration: 250, turn: 30, shields: 630, armour: 15, guns: 2, turrets: 0, space: 5, cargo: 0, attmod: 3, defmod: 1, manmod: 1},
      {id: 66, name: 'Krypt Pod', faction: 'Alien', type: 'Battleship', speed: 600, acceleration: 1300, turn: 130, shields: 1200, armour: 1200, guns: 1, turrets: 0, space: 30, cargo: 0, attmod: 15, defmod: 2, manmod: 1},
    ],
    comparisonShips: [],
    activeFactions: ['Federation', 'Auroran', 'Polaris', 'Vell-os', 'Pirate', 'Rebel', 'Neutral', 'Alien'],
    checkboxes: ['Federation', 'Auroran', 'Polaris', 'Vell-os', 'Pirate', 'Rebel', 'Neutral', 'Alien'],
  }

  addShip = (newShip) => {
    if (this.state.comparisonShips.includes(newShip) !== true) {
      let comparisonShips = [...this.state.comparisonShips, newShip];
      this.setState({
        comparisonShips
      });
    }
  }

  removeShip = (ship) => {
    const comparisonShips = this.state.comparisonShips.filter(theship => {
      return theship.id !== ship.id
    });
    this.setState({
      comparisonShips: comparisonShips
    })
  }

  checkCheckbox = (faction, boolean) => {
    if (boolean) {
      const active = this.state.activeFactions;
      active.push(faction);
      this.setState({
        activeFactions: active
      })
    } else {
      if (this.state.activeFactions.includes(faction)) {
        const active = this.state.activeFactions.filter(thefaction => {return thefaction!== faction});
        this.setState({
          activeFactions: active
        })
      }
      else {
        const active = []
        this.setState({
          activeFactions: active
        })
      }
    }

    console.log(boolean);
  }

  getStats = (ship) => {
    let manoeuvreability = ((ship.speed/600 * 10) + (ship.acceleration/1000 * 10) + (ship.turn/100 * 10))/3;
    let manRounded = Math.round(manoeuvreability * 10 * ship.manmod);

    let attack = ((ship.guns/8 * 10) + (ship.turrets/6 * 5) + (ship.space/500 * 10)) / 2.5;
    let attRounded = Math.round(attack * 10 * ship.attmod);

    let defence = ((ship.shields/1800 * 10) + (ship.armour/1800 * 8) + (ship.turrets/6 * 5)) / 2.3;
    let defRounded = Math.round(defence * 10 * ship.defmod);

    var stats = {manoeuvreability: manRounded, attack: attRounded, defence: defRounded};
    return stats
  }

  render() {
    return (
      <Container>
        <Container>
          <h1 className="title"> Escape Velocity Nova Ships</h1>
        </Container>
        <Container>
          <CheckboxContainer checkboxes={this.state.checkboxes} checkCheckbox={this.checkCheckbox}/>
        </Container>
        <Container>
          <Ships searchBar={this.state.searchBar} factions={this.state.activeFactions} shipss={this.state.ships} addShip={this.addShip} getStats={this.getStats}/>
        </Container>
        {this.state.comparisonShips.length &&
        <Container>
          <Compare comparisonShipss={this.state.comparisonShips} getStats={this.getStats} removeShip={this.removeShip}/>
        </Container>
        }
      </Container>

    );
  }
}

export default App;
