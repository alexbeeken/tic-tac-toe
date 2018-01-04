import React, { Component } from 'react';
import Winner from './components/winner'
import './App.css';

const WINNING_COMBOS = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      PLAYER_ONE_SYMBOL: 'X',
      PLAYER_TWO_SYMBOL: 'O',
      currentTurn: 'X',
      board: [
        "","","","","","","","",""
      ],
      turns: 0,
      winner: null
    }

    this.resetGame = this.resetGame.bind(this);
  }

  checkForWinner() {
    if (this.state.turns >= 2) {
      var board = this.state.board
      return WINNING_COMBOS.find((combo) => {
        if (board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]] && board[combo[0]] !== "" && board[combo[1]] !== "" && board[combo[2]] !== "") {
          return board[combo[0]]
        } else {
          return false
        }
      })
    } else {
      return false
    }
  }

  handleClick(index) {
    if (this.state.board[index] === "") {
      var board = this.state.board
      board[index] = this.state.currentTurn
      this.setState({
        board: board,
        currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL,
        turns: this.state.turns + 1
      })
      var winner = this.checkForWinner()
      if (winner) {
        this.setState({
          winner: this.state.currentTurn
        })
      }
    }
  }

  resetGame() {
    this.setState({
      currentTurn: 'X',
      board: [
        "","","","","","","","",""
      ],
      turns: 0,
      winner: null
    })
  }

  render() {
    return (
      <div className='game'>
        <div className='board'>
          { this.state.board.map((cell, index) => {
            return <div className='square' onClick={this.handleClick.bind(this, index)} key={index}>{cell}</div>
          })}
        </div>
        {this.state.winner && <Winner winner={this.state.winner} />}
        <div class='reset-button'>
          <button onClick={this.resetGame}>
            reset game
          </button>
        </div>
      </div>
    );
  }
}

export default App;
