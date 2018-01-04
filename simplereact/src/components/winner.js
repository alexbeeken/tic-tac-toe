import React, { Component } from 'react';

class Winner extends Component {
  render() {
    return (
      <div className='winner'>
        <h1>{this.props.winner} has won!</h1>
      </div>
    )
  }
}

export default Winner;
