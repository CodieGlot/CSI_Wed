import { ListNode } from "./root";
import { nodeA, nodeB, nodeC, nodeD, nodeE } from "./root";
import { getAllNodes } from "./traversal";

function deleteNode(deleteNode: ListNode): void {
  let node: ListNode | null = nodeA;
  let prev: ListNode | null = new ListNode(0, node);
  while (node && node !== deleteNode) {
    prev = node;
    node = node.next;
  }
  if (node) prev.next = node.next;
}

deleteNode(nodeB);
console.log(
  `The order of the current linked list: ${getAllNodes(nodeA).join("->")}`
);
