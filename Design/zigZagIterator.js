/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
    //keep track of which array to return value from
    this.current = 0
    this.index1 = 0
    this.index2 = 0
    this.v1 = v1
    this.v2 = v2
};


/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
    return this.index1 < this.v1.length || this.index2 < this.v2.length
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
    let returnVal
    if (this.current === 0) {
        //grab from v1 if valid index else grab from v2
        if (this.index1 < this.v1.length) {
            returnVal = this.v1[this.index1]
            this.index1++
        } else {
            returnVal = this.v2[this.index2]
            this.index2++
        }
    } else {
         if (this.index2 < this.v2.length) {
            returnVal = this.v2[this.index2]
            this.index2++
        } else {
            returnVal = this.v1[this.index1]
            this.index1++
        }
    }
    //switch current at the end
    this.current = this.current === 1 ? 0 : 1
    return returnVal
};

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

let zig = new ZigzagIterator([1,2,3], [4,5,6,7,8])
let zigArr = []
while (zig.hasNext()) zigArr.push(zig.next()) 
console.log("ZIGARR"< zigArr)