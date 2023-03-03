import { ListNode } from "./root";
import { nodeA, nodeB, nodeC, nodeD, nodeE } from "./root";

function retrieveNode(num: number) {
  let node: ListNode | null = new ListNode();
  Object.assign(node, nodeA);
  while (node && node.val !== num) node = node.next;
  return node;
}

console.log(retrieveNode(3));
