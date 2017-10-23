// Create player board to see moves and past moves.
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    let board = [];
    for (var i = 0; i < numberOfRows; i++) {
        let row = [];
        for (var j = 0; j < numberOfColumns; j++) {
            row.push(' ');        
        }
    board.push(row);
    }
    return board;
};

// Generate Board with Bombs Shown
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    let board = [];
    for (var i = 0; i < numberOfRows; i++) {
        let row = [];
        for (var j = 0; j < numberOfColumns; j++) {
            row.push(null);        
        }
    board.push(row);
    }
    let numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
        let randomRowIndex = Math.floor(Math.random() * numberOfRows);
        let randomColumnsIndex = Math.floor(Math.random() * numberOfColumns);
        if (board[randomRowIndex][randomColumnsIndex] !== 'B') {
            board[randomRowIndex][randomColumnsIndex] = 'B';
            numberOfBombsPlaced ++;
        }
    }
    return board;
};

// Get number of surrounding bombs in flipped tile
const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
    const neighborOffset = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]];
    const numberOfRows = bombBoard.length;
    const numberOfColumns = bombBoard[0].length;
    let numberOfBombs = 0;
    neighborOffset.forEach(offset => {
        const neighborRowIndex = rowIndex + offset[0];
        const neighborColumnIndex = columnIndex + offset[1];
        if (neighborRowIndex >= 0
            && neighborRowIndex < numberOfRows
            && neighborColumnIndex >= 0 
            && neighborColumnIndex < numberOfColumns) {
            if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
                numberOfBombs ++;
            }    
        }
    });
    return numberOfBombs;
};

// User flips tile with bomb or number
const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
    if (playerBoard[rowIndex][columnIndex] !== ' ') {
        return "This tile has already been flipped!.";
    } else if (bombBoard[rowIndex][columnIndex] === 'B'){
        playerBoard[rowIndex][columnIndex] = 'B';
    } else {
        playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
    }
};

// Prints Boards
const printBoard = (board) => {
    console.log(board.map(row => row.join(' | ')).join('\n'));
};

// Blank and bomb boards
let playerBoard = generatePlayerBoard(4, 4);
let bombBoard = generateBombBoard(4, 4, 5);

// Run first round of game
console.log("The Player Board:");
printBoard(playerBoard);
console.log("The Bomb Board:");
printBoard(bombBoard);
flipTile(playerBoard, bombBoard, 0, 0);
console.log("Updated Board:");
printBoard(playerBoard);