export class Board {
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = numberOfRows * numberOfColumns;
        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }
    get playerBoard() {
        return this._playerBoard;
    }
    // User flips tile with bomb or number
    flipTile (rowIndex, columnIndex) {
        if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
            return "This tile has already been flipped!.";
        } else if (this._bombBoard[rowIndex][columnIndex] === 'B'){
            this._playerBoard[rowIndex][columnIndex] = 'B';
        } else {
            this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
        }
    this._numberOfTiles --;
    } // End Flip Tile
    // Get number of surrounding bombs in flipped tile
    getNumberOfNeighborBombs (rowIndex, columnIndex) {
        const neighborOffset = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]];
        const numberOfRows = this._bombBoard.length;
        const numberOfColumns = this._bombBoard[0].length;
        let numberOfBombs = 0;
        neighborOffset.forEach(offset => {
            const neighborRowIndex = rowIndex + offset[0];
            const neighborColumnIndex = columnIndex + offset[1];
            if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
                if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
                    numberOfBombs ++;
                }    
            }
        });
        return numberOfBombs;
    } // End Number of Bombs
    hasSafeTiles () {
        return (this._numberOfBombs !== this._numberOfTiles);
    }
    // Prints Boards
    print() {
        console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
    }
    // Create player board to see moves and past moves.
    static generatePlayerBoard (numberOfRows, numberOfColumns) {
        let board = [];
        for (var i = 0; i < numberOfRows; i++) {
            let row = [];
            for (var j = 0; j < numberOfColumns; j++) {
                row.push(' ');        
            }
        board.push(row);
        }
        return board;
    } // End player board
    // Generate Board with Bombs Shown
    static generateBombBoard (numberOfRows, numberOfColumns, numberOfBombs) {
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
    }
}
