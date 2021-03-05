/*
FileSystem
-create file system hash map to hold paths

createPath
-false paths: ('a/s', '/d//g')
-split path on "/"
    -check first item (should be empty string)
    -iterate through, check for empty strings (false)
*/

var FileSystem = function() {
    this.files = {}
};

/** 
 * @param {string} path 
 * @param {number} value
 * @return {boolean}
 */
FileSystem.prototype.createPath = function(path, value) {
    // split on '/'
    let pathways = path.split('/')
    //verify first in path is legit
    if (pathways[0] !== '') return false
    //verify that the rest of paths are valid
    let currentDirectory = this.files
    for (let i = 1; i < pathways.length - 1; i++) {
        let currentFile = pathways[i]
        if (!pathways[i]) return false
        if (!currentDirectory[currentFile]) return false
    }
    //create pathways for valid directories
    currentDirectory = this.files
    for (let i = 1; i < pathways.length; i++) {
        let currentFile = pathways[i]
        if (!currentDirectory[currentFile]) currentDirectory[currentFile] = {}
        currentDirectory = currentDirectory[currentFile]
    }
    if (currentDirectory.value) return false
    currentDirectory.value = value
    return true
};

/** 
 * @param {string} path
 * @return {number}
 */
FileSystem.prototype.get = function(path) {
    let pathways = path.split('/')
    if (pathways[0] !== '') return false
    let currentDirectory = this.files
    for (let i = 1; i < pathways.length; i++) {
        let currentFile = pathways[i]
        if (!currentDirectory[currentFile]) return -1
        currentDirectory = currentDirectory[currentFile]
    }
    return currentDirectory.value ? currentDirectory.value : -1
};

/** 
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.createPath(path,value)
 * var param_2 = obj.get(path)
 */