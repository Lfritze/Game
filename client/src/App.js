import React, { Component } from 'react';
import HeaderTop from './components/HeaderTop';
import GamePlay from './components/GamePlay';
import { Divider } from 'semantic-ui-react';


class App extends Component {

  render() {
    return (
      <div>
        <HeaderTop />  
        <GamePlay />
        <Divider />

        <div className="rules" style={{ width: "50%", margin: "0 auto", marginBottom: "10%"}}>
          <h2 style={{color: "#fff", padding: "15px 0 12px 0", margin: "0 auto", textAlign: "center"}}>Rules</h2>

          <p style={{textAlign: "left"}}> 
          The Game of Life is an infinite, two-dimensional grid of square cells, each of which is in one of two possible states, live or dead.</p>

          <p style={{textAlign: "left"}}> Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:
            <br></br><br></br>
              <li> Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
          
              <li>Any live cell with two or three live neighbours lives on to the next generation.</li>

              <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>

              <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
            <br></br>

          These rules, which compare the behavior of the automaton to real life, can be condensed into the following:
              <br></br><br></br>
              <li>Any live cell with two or three live neighbours survives.</li>

              <li>Any dead cell with three live neighbours becomes a live cell.</li>

              <li>All other live cells die in the next generation.</li>

              <li>Similarly, all other dead cells stay dead.</li>
          <br></br><br></br>
          
          The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.</p>
          </div>
        
        </div>

    );
  }
}

export default App;
