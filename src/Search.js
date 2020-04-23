import React, { Component } from 'react'

class Search extends Component {
  state = {
    content: ""
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
    this.props.searchShips(this.state.content)
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="search-bar">Search</label>
          <input type="text" onChange={this.handleChange} value={this.state.content}/>
        </form>
      </div>
    )
  }
}

export default Search;
