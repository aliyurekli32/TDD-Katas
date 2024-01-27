export class RecentlyList {
  private list: (number | string)[] = [];
  listSize: number;
  constructor(listSize: number = 5) {
    this.listSize = listSize < 0 ? 5 : listSize;
  }

  addItemToList(number: number | string) {
    if (
      !this.list.includes(number) &&
      number !== null &&
      number !== undefined &&
      number !== "" &&
      this.list.length < this.listSize
    ) {
      this.list = [number, ...this.list];
    }
  }
  getRecentlyList() {
    return this.list;
  }
  gerElementWithIndex(index: number) {
    if (index < this.list.length && index >= 0) {
      return this.list[index];
    }
    throw new Error("Invalid index");
  }
}
