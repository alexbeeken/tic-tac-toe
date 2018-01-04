import React, { Component } from 'react';

class ResetButton extends Component {
  render() {
    return (
      <div class='reset-button'>
        <button onClick={this.props.resetGame}>
          reset game
        </button>
      </div>
    )
  }
}

export default ResetButton;
