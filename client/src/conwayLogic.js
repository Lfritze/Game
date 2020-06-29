export const notDead = 1;
export const notAlive = 0;
export const boardAcreage = 70;
export const speedPerGen = 100;

export const eightNeighbors = (x, y) => {
    return [
    [x - 1, y - 1], 
    [x, y - 1], 
    [x + 1, y - 1], 
    [x - 1, y], 
    [x + 1, y], 
    [x - 1, y + 1], 
    [x, y + 1], 
    [x + 1, y + 1]
]
        .filter(z =>
            z[0] >= 0 && z[0] < boardAcreage &&
            z[1] >= 0 && z[1] < boardAcreage
        );
}

export const neighborsAlive = (board, x, y) => {
    return eightNeighbors(x, y).filter(n => board[n[0]][n[1]] === notDead).length;
}

export const nextGen = board => {
    let newBoard = makeBoard();
    for (let x = 0; x < boardAcreage; x++) {
        for (let y = 0; y < boardAcreage; y++) {
            const alive = neighborsAlive(board, x, y);
            const cell = board[x][y];
            newBoard[x][y] = (alive === 3 || (alive === 2 && cell === notDead)) ? notDead : notAlive;
        }
    }
    return newBoard;
}

export const makeBoard = () => {
    return Array(boardAcreage).fill().map(() => Array(boardAcreage).fill(notAlive));
}

export const transformArrVal = (arr, i, val) => [
    ...arr.slice(0, i), val, ...arr.slice(i + 1)
];

export const randomize = board => board.map(row => row.map(cell => Math.round(Math.random())));