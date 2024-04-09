export class DoublyLinkedList<T> {
  private head: DoublyLinkedListNode<T> | null;
  private tail: DoublyLinkedListNode<T> | null;
  private count: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  public size(): number {
    return this.count;
  }

  public isEmpty(): boolean {
    return this.count === 0;
  }

  public add(value: T): void {
    const newNode = new DoublyLinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      if (this.tail) {
        this.tail.next = newNode;
      }
      this.tail = newNode;
    }

    this.count++;
  }

  public get(index: number): T | null {
    if (index < 0 || index >= this.count) {
      throw new Error("Index out of bounds");
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }

    return current!.value;
  }

  public remove(index: number): void {
    if (index < 0 || index >= this.count) {
      throw new Error("Index out of bounds");
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }

    if (current === this.head) {
      this.head = current!.next;
    } else if (current === this.tail) {
      this.tail = current!.prev;
    } else {
      current!.prev!.next = current!.next;
      current!.next!.prev = current!.prev;
    }

    this.count--;
  }

  public removeLast(): T | null {
    if (!this.tail) {
      return null;
    } else {
      const temp = this.tail;
      this.tail = temp.prev;
      temp.prev = null;
      this.count--;
      return temp.value;
    }
  }

  public insert(index: number, value: T): void {
    if (index < 0 || index > this.count) {
      throw new Error("Index out of bounds");
    }

    if (index === this.count) {
      this.add(value);
      return;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }

    const newNode = new DoublyLinkedListNode(value);
    newNode.prev = current!.prev;
    newNode.next = current;
    current!.prev = newNode;

    if (current === this.head) {
      this.head = newNode;
    } else {
      newNode.prev!.next = newNode;
    }

    this.count++;
  }

  public clear(): void {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  public indexOf(value: T): number {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  public getHead(): T | null {
    return this.head ? this.head.value : null;
  }

  public getTail(): T | null {
    return this.tail ? this.tail.value : null;
  }
}

class DoublyLinkedListNode<T> {
  public value: T;
  public next: DoublyLinkedListNode<T> | null;
  public prev: DoublyLinkedListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
