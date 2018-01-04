import React, { Component } from 'react';
import Winner from './components/winner'
import ResetButton from './components/reset-button'
import Board from './components/board'
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
      var result = WINNING_COMBOS.find((combo) => {
        if (board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]] && board[combo[0]] !== "" && board[combo[1]] !== "" && board[combo[2]] !== "") {
          return board[combo[0]]
        } else {
          return false
        }
      })
      if (!result && this.state.turns >= 8) {
        return 'Nobody'
      } else if (result) {
        return this.state.currentTurn
      } else {
        return false
      }
    } else {
      return false
    }
  }

  handleClick(index) {
    if (this.state.board[index] === "" && !this.state.winner) {
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
          winner: winner
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
        <div className='upper'>
          <Board board={this.state.board} handleClick={this.handleClick.bind(this)}/>
        </div>
        <div className='lower'>
          {this.state.winner && <Winner winner={this.state.winner} />}
          {this.state.winner && <ResetButton resetGame={this.resetGame} />}
        </div>
      </div>
    );
  }
}

export default App;
