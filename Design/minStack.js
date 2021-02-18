/**
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

    push(x) -- Push element x onto stack.
    pop() -- Removes the element on top of the stack.
    top() -- Get the top element.
    getMin() -- Retrieve the minimum element in the stack.
 
 */

const MinStack = function() {
    this.stack = []
    this.min = Infinity
}

MinStack.prototype.push = function(val) {
    this.stack.push([val, this.min])
    if (val < this.min) this.min = val
}
MinStack.prototype.pop = function() {
    let poppedVal = this.stack.pop()
    if (this.min === poppedVal[0]) this.min = poppedVal[1]    
    return poppedVal[0]
}
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1][0]
}
MinStack.prototype.getMin = function() {
    return this.min
}