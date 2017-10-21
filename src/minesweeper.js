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

console.log(generatePlayerBoard(3, 4));
console.log(generatePlayerBoard(12, 12));

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
        board[randomRowIndex][randomColumnsIndex] = 'B';
        numberOfBombsPlaced ++;
    }
    return board;
};


const printBoard = (board) => {
    console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3, 4, 5);

console.log("The Player Board:")
printBoard(playerBoard);
console.log("The Bomb Board:")
printBoard(bombBoard);

