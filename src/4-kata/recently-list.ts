export class RecentlyList {
  private list: number[] = [];

  addItemToList(number: number) {
    if (!this.list.includes(number)) {
      this.list = [number, ...this.list];
    }
  }
  getRecentlyList() {
    return this.list;
  }
  gerElementWithIndex(index: number) {
    return this.list[index];
  }
}
