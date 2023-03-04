import { ListNode } from "./root";
import { nodeA, nodeB, nodeC, nodeD, nodeE } from "./root";

function searchNode(num: number): (ListNode | null)[] {
  let node: ListNode | null = new ListNode();
  Object.assign(node, nodeA);
  let prev: ListNode | null = new ListNode(0, node);

  while (node) {
    if (node.val === num) return [node];
    else if (node.val > num)
      return node.val === nodeA.val ? [null, node] : [prev, node];
    else {
      prev = node;
      node = node.next;
    }
  }
  return [prev, node];
}

console.log(searchNode(7));
