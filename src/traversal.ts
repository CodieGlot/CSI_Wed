import { ListNode } from "./root";
import { nodeA, nodeB, nodeC, nodeD, nodeE } from "./root";

export function getAllNodes(head: ListNode | null): number[] {
  let node: ListNode | null = new ListNode();
  Object.assign(node, head);

  const visited: number[] = [];
  while (node) {
    visited.push(node.val);
    node = node.next;
  }

  return visited;
}

console.log(
  `The order of the current linked list: ${getAllNodes(nodeA).join("->")}`
);
