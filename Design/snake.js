/**
 * Initialize your data structure here.
        @param width - screen width
        @param height - screen height 
        @param food - A list of food positions
        E.g food = [[1,1], [1,0]] means the first food is positioned at [1,1], the second is at [1,0].
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
var SnakeGame = function(width, height, food) {
    this.x = height -1
    this.y = width - 1
    this.head = [0,0]
    this.body = [[0, 0]]
    this.length = 1
    this.food = food
};

/**
 * Moves the snake.
        @param direction - 'U' = Up, 'L' = Left, 'R' = Right, 'D' = Down 
        @return The game's score after the move. Return -1 if game over. 
        Game over when snake crosses the screen boundary or bites its body. 
 * @param {string} direction
 * @return {number}
 */
SnakeGame.prototype.move = function(direction) {
    // if game is over return -1
    if (this.food.length < 0) { 
        console.log("Game over")
        return -1}
    let moveSets = {
        'U': [-1, 0],
        'L': [0, -1],
        'R': [0, 1],
        'D': [1, 0]
    }
    // make the move
    let currentMove = moveSets[direction]
    let currentX = this.head[0] + currentMove[0]
    let currentY = this.head[1] + currentMove[1]
    // check boundaries
    if (!this.checkBoundary(currentX, currentY)) {
        console.log('Boundary failed')
        return -1
    }
    // check for fruit
    if (this.checkFruit(currentX, currentY)) {
        // dequeue food
        this.food.shift()
        // increase length
        this.length++
    }
    // update head coord and body
    this.body.push([currentX, currentY])
    this.head = [currentX, currentY]
    // dequeue body
    while (this.body.length > this.length) this.body.shift()
    // check that it hasn't hit its own body
    if (!this.bodyCheck(currentX, currentY)) { 
        console.log("Body failed")
        return -1
    }
    return this.length - 1
};

SnakeGame.prototype.bodyCheck = function(x, y) {
    console.log(x, y, this.body)
    // iterate through body coords and check for dupes
    // ignore last coord in body as this is the head
    for (let i = 0; i < this.body.length - 1; i++) {
        let bodyX = this.body[i][0]
        let bodyY = this.body[i][1]
        if (x === bodyX && y === bodyY) return false
    }
    return true
}

SnakeGame.prototype.checkFruit = function(currentX, currentY) {
    if (!this.food.length) return false
    let fruit = this.food[0]
    return (currentX === fruit[0]) && (currentY === fruit[1])
}

SnakeGame.prototype.checkBoundary = function(x, y) {
// check that current x & y coord do not exceed boundaries
    return (x >= 0 && x <= this.x) && (y >= 0 && y <= this.y)
} 

/** 
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */

/*
Keep track of snakes head, current coords for snake body
-boundaries: we know boundaries so if head's coords exceed we can return -1
-current head: each direction should move head +- 1
    -afterwards we can check for bodyhit or boundary hit
body: set as queue, each time we move we should dequeue unless we hit fruit

*/