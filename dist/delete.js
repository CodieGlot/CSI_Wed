"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const root_1 = require("./root");
const root_2 = require("./root");
const traversal_1 = require("./traversal");
function deleteNode(deleteNode) {
    let node = root_2.nodeA;
    let prev = new root_1.ListNode(0, node);
    while (node && node !== deleteNode) {
        prev = node;
        node = node.next;
    }
    if (node)
        prev.next = node.next;
}
deleteNode(root_2.nodeB);
console.log(`The order of the current linked list: ${(0, traversal_1.getAllNodes)(root_2.nodeA).join("->")}`);
