/**
 * Implement OOP version of tic tac toe
 * 
 * -2 players
 * -Board
 * -keep track of current player
 * -Keep track of currently occupied coords
 * 
 * -determine if player has won
 * 
 * TicTacToe => function(n)
 * -addCoord: store the coord in hashmap
 *      -coords: NxN array (p1 = 1, p2 = 2)
 *      -return false if coord has been played
 *      -return true if coord is valid
 * -playerWon: determines if player has won
 *      -diagnonal, horizontal, vertical
 *      -(0,2) [0,0] => [0,n]
 * [1,1,1]
 * [0,1,0]
 * [1,0,1]
 */

const TicTacToe = function (n) {
    let board = []
    for (let i = 0; i < n; i++) {
        let row = []
        for (let i = 0; i < n; i++) {
            row.push(0)
        }
        board.push(row)
    }
    this.board = board
    this.rowCounts = [n]
    this.colCounts = [n]
    this.ascendingDiagonal = [n]
    this.descendingDiagonal = [n]
}

TicTacToe.prototype.addCoord = function(x, y, currentPlayer) {
    // check if move has already been made
    if (this.board[x][y]) return 'This move has already been made'
    // add to board
    this.board[x][y] = currentPlayer
    if (this.playerWon(x,y,currentPlayer)) return `Player ${currentPlayer} has won`
    return 'Move has been made'
}

TicTacToe.prototype.playerWon = function(x, y, currentPlayer) {
    // check horizontal values
    let row = this.board[x]
    let validRow = true
    for (let i = 0; i < row.length; i++) {
        // check if all row elements are current players
        if (row[i] !== currentPlayer) validRow = false
    }
    if (validRow) return true
    // check vertical values
    let validCol = true
    for ( let i = 0; i < row.length; i++) {
        if (this.board[x][i] !== currentPlayer) validCol = false
    }
    if (validCol) return true

}
n = 4
[
[1,0,0,0] 
[0,0,0,0] 
[0,0,0,0] [0,3], [1,2], [2,1], [3,0]
[0,0,0,0] [0,0], [1,1], [2,2], [3,3]
]
[[0,0], [0,3], [1,1], [1,2], [2,1], [2,0], [2,2]]

TicTacToe.prototype.validDiagonalCoord = function(x, y) {
    if (x === y) return true
    if (x + y === this.board.length - 1) return true
    return false
}