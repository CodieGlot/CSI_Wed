import { ListNode } from "./root";
import { nodeA, nodeB, nodeC, nodeD, nodeE } from "./root";
import { getAllNodes } from "./traversal";

function insertNode(node: ListNode, insertedNode: ListNode): void {
  let nextNode: ListNode | null = node.next;
  node.next = insertedNode;
  insertedNode.next = nextNode;
}

let insertedNode = new ListNode(10);
insertNode(nodeB, insertedNode);

console.log(
  `The order of the current linked list: ${getAllNodes(nodeA).join("->")}`
);
