export class RecentlyList {
  private list: number[] = [];

  addItemToList(number: number) {
    this.list = [number, ...this.list];
  }
  getRecentlyList() {
    return this.list;
  }
}
