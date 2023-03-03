"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const root_1 = require("./root");
const root_2 = require("./root");
function searchNode(num) {
    let node = new root_1.ListNode();
    Object.assign(node, root_2.nodeA);
    let prev = new root_1.ListNode(0, node);
    while (node) {
        if (node.val === num)
            return [node];
        else if (node.val > num)
            return node.val === root_2.nodeA.val ? [null, node] : [prev, node];
        else {
            prev = node;
            node = node.next;
        }
    }
    return [prev, node];
}
console.log(searchNode(7));
