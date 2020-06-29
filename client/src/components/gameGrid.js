import React, { Component } from 'react';
import { transformArrVal } from '../conwayLogic';

class GameGrid extends Component {

  ternaryToggleCell = (cell, x, y) => {
    const { board } = this.props;
    const row = transformArrVal(board[y], x, cell ? 0 : 1);
    const newboard = transformArrVal(board, y, row);
    this.props.onChange(newboard);
  }

  showCell = (cell, x, y) => {
    return (
      <div key={x}
        className='cell'
        onMouseDown={() => this.ternaryToggleCell(cell, x, y)}
        style={{ backgroundColor: cell ? '#1c5252' : null }}
      />
    );
  }

  showRow = (row, y) => (
    <div className='row' key={y}>
      {row.map((cell, x) => this.showCell(cell, x, y))}
    </div>
  )

  render() {
    return (
      <div className='game-grid'>
        {this.props.board.map((row, y) => this.showRow(row, y))}
      </div>
    );
  }

}

export default GameGrid;