"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const root_1 = require("./root");
const root_2 = require("./root");
const traversal_1 = require("./traversal");
function insertNode(node, insertedNode) {
    let nextNode = node.next;
    node.next = insertedNode;
    insertedNode.next = nextNode;
}
let insertedNode = new root_1.ListNode(10);
insertNode(root_2.nodeB, insertedNode);
console.log(`The order of the current linked list: ${(0, traversal_1.getAllNodes)(root_2.nodeA).join("->")}`);
