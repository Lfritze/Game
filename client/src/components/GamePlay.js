import React, { Component } from 'react';
import GameGrid from './gameGrid';
import GameButtons from './GameButtons';
import SamplePatterns from './SamplePatterns';
import { speedPerGen, makeBoard, nextGen, randomize } from '../conwayLogic';
import { samplePatternData } from '../samplePatternData';

class GamePlay extends Component {

  state = {
    board: samplePatternData(''),
    generation: 0,
    running: false,
  }

  changeState = (board, generation) => this.setState({
    board: board,
    generation: generation,
  });

  onChange = board => this.changeState(board, this.state.generation + 1);

  onClear = () => this.changeState(makeBoard(), 0);

  onRandomize = () => this.changeState(randomize(this.state.board), 0);

  onPattern = pattern => this.changeState(samplePatternData(pattern), 0);

  onNext = () => this.onChange(nextGen(this.state.board));

  onPlay = () => {
    this.setState({ running: true });
    this.interval = setInterval(() => this.onNext(), speedPerGen);
  }

  onStop = () => {
    this.setState({ running: false });
    clearInterval(this.interval);
  }

  render() {
    const { board, running } = this.state;
    return (
      <div>
        <GameButtons
          clear={this.onClear}
          next={this.onNext}
          play={this.onPlay}
          stop={this.onStop}
          randomize={this.onRandomize}
          running={running}
        />
        <SamplePatterns
          load={this.onPattern}
          running={running}
        />
        <p className="generation">Generation: {this.state.generation}</p>
        <GameGrid board={board} onChange={this.onChange} />
        
        
      </div>
    );
  }

}

export default GamePlay;
