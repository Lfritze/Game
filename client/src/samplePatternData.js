import { notDead, boardAcreage, makeBoard } from './conwayLogic';

export const samplePatternData = pat => {
    let newBoard = makeBoard();
    switch (pat) {
        case 'glider':
            return glider(newBoard);
        case 'diehard':
            return diehard(newBoard);
        case 'gliderGun':
            return gliderGun(newBoard);
        default:
            return newBoard;
    }
}

// const line = board => {
//     const half = Math.floor(boardAcreage / 2);
//     board[half].fill(notDead);
//     return board;
// }

const glider = board => {
    board[3][1] = notDead;
    board[3][2] = notDead;
    board[3][3] = notDead;
    board[2][3] = notDead;
    board[1][2] = notDead;
    return board;
}

const diehard = board => {
    board[17][16] = notDead;
    board[18][10] = notDead;
    board[18][11] = notDead;
    board[19][11] = notDead;
    board[19][15] = notDead;
    board[19][16] = notDead;
    board[19][17] = notDead;
    return board;
}

const gliderGun = board => {
    board[5][1] = notDead;
    board[5][2] = notDead;
    board[6][1] = notDead;
    board[6][2] = notDead;

    board[3][13] = notDead; 
    board[3][14] = notDead;
    board[4][12] = notDead; 
    board[4][16] = notDead;
    board[5][11] = notDead; 
    board[5][17] = notDead;
    board[6][11] = notDead; 
    board[6][15] = notDead;
    board[6][17] = notDead; 
    board[6][18] = notDead;
    board[7][11] = notDead; 
    board[7][17] = notDead;
    board[8][12] = notDead; 
    board[8][16] = notDead;
    board[9][13] = notDead; 
    board[9][14] = notDead;

    board[1][25] = notDead;
    board[2][23] = notDead; 
    board[2][25] = notDead;
    board[3][21] = notDead; 
    board[3][22] = notDead;
    board[4][21] = notDead; 
    board[4][22] = notDead;
    board[5][21] = notDead; 
    board[5][22] = notDead;
    board[6][23] = notDead; 
    board[6][25] = notDead;
    board[7][25] = notDead;

    board[3][35] = notDead; 
    board[3][36] = notDead;
    board[4][35] = notDead; 
    board[4][36] = notDead;

    return board;
}