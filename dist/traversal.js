"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllNodes = void 0;
const root_1 = require("./root");
const root_2 = require("./root");
function getAllNodes(head) {
    let node = new root_1.ListNode();
    Object.assign(node, head);
    const visited = [];
    while (node) {
        visited.push(node.val);
        node = node.next;
    }
    return visited;
}
exports.getAllNodes = getAllNodes;
console.log(`The order of the current linked list: ${getAllNodes(root_2.nodeA).join("->")}`);
