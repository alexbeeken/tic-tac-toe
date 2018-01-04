import React, { Component } from 'react';

class Board extends Component {
  render() {
    return (
      <div className='board'>
        { this.props.board.map((cell, index) => {
          return <div className='square' onClick={() => this.props.handleClick(index)} key={index}>{cell}</div>
        })}
      </div>
    )
  }
}

export default Board;
