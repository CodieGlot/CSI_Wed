"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const root_1 = require("./root");
const root_2 = require("./root");
function retrieveNode(num) {
    let node = new root_1.ListNode();
    Object.assign(node, root_2.nodeA);
    while (node && node.val !== num)
        node = node.next;
    return node;
}
console.log(retrieveNode(3));
