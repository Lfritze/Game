### Welcome to John Conway's Game of Life - Cellular Automata 👋
### Live Version: https://cellular-automata-game-of-life.netlify.app/
###
###

<div align="center">
  <img width="70%" src="client/src/resources/screenshot.jpg" alt="cover" />
</div>

# John Conway's Game of Life

The Game of Life is an infinite, two-dimensional grid of square cells, each of which is in one of two possible states, live or dead.

Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

- Any live cell with fewer than two live neighbours dies, as if by underpopulation.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by overpopulation.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

These rules, which compare the behavior of the automaton to real life, can be condensed into the following:

Any live cell with two or three live neighbours survives.
Any dead cell with three live neighbours becomes a live cell.
All other live cells die in the next generation.
Similarly, all other dead cells stay dead.


The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.

## Installation

- Clone Repo
- npm install
- npm start

## Technology 
- React
- Class & functional components
- Semantic-UI
- Data Structure for all 8 neighbors: [x - 1, y - 1], 
    [x, y - 1], 
    [x + 1, y - 1], 
    [x - 1, y], 
    [x + 1, y], 
    [x - 1, y + 1], 
    [x, y + 1], 
    [x + 1, y + 1]

## Potential Upcoming Changes
- Make the site mobile friendly (responsive design)
- Revamp the UI / color scheme
- Add more sample patterns to load

## Current Items to Repair/Improve
- Make it more responsive and mobile friendly

## License
[MIT](https://choosealicense.com/licenses/mit/)

