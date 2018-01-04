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

  render() {
    return (
      <div className='board'>
        {this.state.board.map((cell) => {
          return <div className='square'>{cell}</div>
        })}
      </div>
    );
  }
}

export default App;
