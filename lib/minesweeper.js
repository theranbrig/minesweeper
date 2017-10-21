'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
    var board = [];
    for (var i = 0; i < numberOfRows; i++) {
        var row = [];
        for (var j = 0; j < numberOfColumns; j++) {
            row.push(' ');
        }
        board.push(row);
    }
    return board;
};

console.log(generatePlayerBoard(3, 4));
console.log(generatePlayerBoard(12, 12));

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    var board = [];
    for (var i = 0; i < numberOfRows; i++) {
        var row = [];
        for (var j = 0; j < numberOfColumns; j++) {
            row.push(null);
        }
        board.push(row);
    }
    var numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
        var randomRowIndex = Math.floor(Math.random() * numberOfRows);
        var randomColumnsIndex = Math.floor(Math.random() * numberOfColumns);
        board[randomRowIndex][randomColumnsIndex] = 'B';
        numberOfBombsPlaced++;
    }
    return board;
};

var printBoard = function printBoard(board) {
    console.log(board.map(function (row) {
        return row.join(' | ');
    }).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);

console.log("The Player Board:");
printBoard(playerBoard);
console.log("The Bomb Board:");
printBoard(bombBoard);