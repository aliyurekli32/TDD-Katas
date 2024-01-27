type NumberOrString = number | string;

export class RecentlyList {
  private list: NumberOrString[] = [];
  listSize: number;

  constructor(listSize: number = 5) {
    this.listSize = Math.max(listSize, 5);
  }

  addItemToList = (number: NumberOrString): void => {
    if (this.isEligibleToAdd(number)) {
      this.list = [number, ...this.list];
    }
  };

  getRecentlyList = (): NumberOrString[] => this.list;

  getElementWithIndex = (index: number): NumberOrString => {
    if (index < this.list.length && index >= 0) {
      return this.list[index];
    }
    throw new Error("Invalid index");
  };

  private isEligibleToAdd = (number: NumberOrString): boolean =>
    !this.list.includes(number) &&
    number !== null &&
    number !== undefined &&
    number !== "" &&
    this.list.length < this.listSize;
}
