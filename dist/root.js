"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeE = exports.nodeD = exports.nodeC = exports.nodeB = exports.nodeA = exports.ListNode = void 0;
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
exports.ListNode = ListNode;
const nodeE = new ListNode(8);
exports.nodeE = nodeE;
const nodeD = new ListNode(6, nodeE);
exports.nodeD = nodeD;
const nodeC = new ListNode(5, nodeD);
exports.nodeC = nodeC;
const nodeB = new ListNode(3, nodeC);
exports.nodeB = nodeB;
const nodeA = new ListNode(1, nodeB);
exports.nodeA = nodeA;
