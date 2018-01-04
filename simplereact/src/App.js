import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      PLAYER_ONE_SYMBOL: 'X',
      PLAYER_TWO_SYMBOL: 'O',
      currentTurn: 'X',
      board: [
        "","","","","","","","",""
      ]
    }
  }

  handleClick(index) {
    console.log(index)
  }

  render() {
    return (
      <div className='board'>
        {this.state.board.map((cell, index) => {
          return <div className='square' onClick={this.handleClick.bind(this, index)} key={index}>{cell}</div>
        })}
      </div>
    );
  }
}

export default App;
