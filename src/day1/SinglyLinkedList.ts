import { isReturnStatement } from "typescript";

class Node<T> {
    public data: T | null;
    public next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
    }
}

export default class SinglyLinkedList<T> {
    public length: number = 0;
    public head: Node<T>;

    constructor() {}

    prepend(item: T): void {
        const node = new Node(item);
        if (!this.head) {
            console.log("no head");
            this.head = node;
            this.length++;
            return;
        }
        let temp = this.head;
        node.next = temp;
        this.head = node;
        this.length++;
    }
    append(item: T): void {
        const node = new Node(item);
        if (!this.head) {
            this.head = node;
            this.length++;
            return;
        }
        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = node;
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        const node = new Node(item);
        let i = 0;
        let temp = this.head;
        if (idx < 0 || this.length < idx) {
            return;
        }
        if (idx === 0) {
            node.next = this.head;
            this.head = node;
            this.length++
            return;
        }
        while (temp.next && i < idx - 1) {
            console.log({
                idx: i,
                data: temp.data,
            });
            temp = temp.next;
            i++;
        }
        console.log("curr node =>", temp);
        node.next = temp?.next;
        temp.next = node;
        this.length++;
    }
    remove(item: T): T | undefined {
        let temp = this.head;
        if (temp.data === item) {
            const nextNode = temp?.next;
            const removed = temp.data!;
            this.head = nextNode!;
            this.length--;
            return removed;
        }

        while (temp.next) {
            const nextNode = temp.next;
            if (nextNode.data === item) {
                const removed = nextNode.data!;
                temp.next = nextNode.next;
                this.length--;
                return removed;
            }
            temp = temp.next;
        }

        return undefined;
    }
    // get(idx: number): T | undefined {
    //     let temp = this as SinglyLinkedList<T>;
    //     let i = 0;
    //     while (temp && i <= idx) {
    //         console.log(temp.data);
    //         if (i === idx) {
    //             return temp.data!;
    //         }
    //         temp = temp.next!;
    //         i++;
    //     }

    //     return undefined;
    // }
    // removeAt(idx: number): T | undefined {
    //     let temp = this as SinglyLinkedList<T>;
    //     let i = 0;
    //     if (idx === 0) {
    //         const removed = temp.data ?? undefined;
    //         const nextNode = temp?.next;
    //         temp = nextNode;
    //         this.length--;
    //         return removed;
    //     }
    //     while (temp.next && i < idx) {
    //         const nextNode = temp.next;
    //         const nextIdx = i + 1;
    //         if (nextIdx === idx) {
    //             temp.next = nextNode.next;
    //             this.length--;
    //             return nextNode.data ?? undefined;
    //         }
    //         temp = temp.next;
    //         i++;
    //     }

    //     return undefined;
    // }
}
const list = new SinglyLinkedList<number>();
list.prepend(1);
// list.prepend(3);
list.append(9);
// list.remove(3);
// list.remove(1);
// list.remove(9);
// list.insertAt(777, 0);
// list.insertAt(777, 190);
// list.insertAt(777, 0)
// list.prepend(300);
list.remove(9);
// console.log(list.get(0))
console.log(list);
// console.log(list.removeAt(0));
// console.log(list);
// console.log("length", list.length);
