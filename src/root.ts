export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const nodeE = new ListNode(8);
const nodeD = new ListNode(6, nodeE);
const nodeC = new ListNode(5, nodeD);
const nodeB = new ListNode(3, nodeC);
const nodeA = new ListNode(1, nodeB);

export { nodeA, nodeB, nodeC, nodeD, nodeE };
