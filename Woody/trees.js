/**
 * input 2 values
 * root, val1, val2
 * : 2 nodes within binary search tree
 * 
 * find the lowest common ancestor of the two nodes
 * 
 * find 1
 * 10, 5, 2, 0, 1
 * find 4
 * 10, 5, 2, 4
 * 
 * (10, 5, 2, 0, 1)
 * 
 * 
 * 1. for the first value, enter all node values into a set until we reach that node
 * 2. for the second value, keep traversing node while current val is in set
 * 3. return last seen value when we hit a node not in the set
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? null : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function findLowestCommonAncestor(val1, val2, root) {
    let seenNodes = createSetOfSeenNodes(val1, root) // traverse tree and add seen values to a set
    let commonAncestor = traverseAndFindAncestor(seenNodes, val2, root) // traverse tree and return last seen set value
    console.log('seen',seenNodes)
    return commonAncestor
}

function traverseAndFindAncestor(seenNodes, val, root) {
    // 10, 5, 2, 0, 1
    let currentNode = root
    let previousSeenNode = root.val
    while (currentNode.val !== val) {
        if (!seenNodes.has(currentNode.val)) return previousSeenNode
        previousSeenNode = currentNode.val
        if (currentNode.val < val) { currentNode = currentNode.right }
        else if (currentNode.val > val) { currentNode = currentNode.left }
    }
    return previousSeenNode
}

function createSetOfSeenNodes(val, root) {
    let seenNodes = new Set()
    let currentNode = root
    while (currentNode.val !== val) {
        seenNodes.add(currentNode.val)
        if (currentNode.val < val) {
            currentNode = currentNode.right
        } else if (currentNode.val > val) {
            currentNode = currentNode.left
        }
    }
    seenNodes.add(val)
    return seenNodes
}

let root = new TreeNode(10,
    new TreeNode(5,
        new TreeNode(2,
            new TreeNode(0,
                null,
                new TreeNode(1)
            ),
            new TreeNode(4, new TreeNode(3))
        )),
    new TreeNode(14))

console.log(findLowestCommonAncestor(14, 1, root))