import React, { Component, Fragment } from 'react';

class Checkbox extends Component {

  state = {
    checked: true
  }

  handleCheck = (e) => {
    const faction = e.target.name;
    const currentState = this.state;
    this.setState({checked: !currentState.checked});
    !currentState.checked ? this.props.checkCheckbox(faction, true) : this.props.checkCheckbox(faction, false);
  }

  render() {
    return (
      <Fragment>
        <label>
          <input type="checkbox" name={this.props.faction} defaultChecked={this.state.checked} onChange={this.handleCheck}></input>
          <span className="checkbox" >{this.props.faction}</span>
        </label>
      </Fragment>
    )
  }

}

export default Checkbox;
