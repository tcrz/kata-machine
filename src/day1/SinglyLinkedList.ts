export default class SinglyLinkedList<T> {
    public length: number = 0;
    public data: T | null;
    public next: SinglyLinkedList<T> | null;

    constructor() {}

    prepend(item: T): void {
        const newNode = new SinglyLinkedList<T>()
        // copy current head (data and next pointer)
        newNode.data = this.data
        newNode.next = this.next
        // update existing head's date to new item
        this.data = item
        // update next to point to copied current head
        this.next = newNode
        this.length++
    }
    insertAt(item: T, idx: number): void {}
    append(item: T): void {
        if (this.length === 0) {
            this.data = item;
            this.length++;
            return;
        }
        let temp = this as SinglyLinkedList<T>;
        while (temp.next) {
            temp = temp.next;
        }
        const newNode = new SinglyLinkedList<T>();
        newNode.data = item;
        temp.next = newNode;
        this.length++
    }
}
const list = new SinglyLinkedList<number>();
list.append(1);
list.append(3);
list.append(9);
// list.append(80);
list.prepend(300)
console.log(list);
console.log("length", list.length);
