export class BowlingGame {
  list: number[] = [];
  roll(number: number) {
    this.list.push(number);
  }
  score() {
    let takeIndex: boolean = true;
    return this.list.reduce((sum: number, num: number, index: number) => {
      if (!takeIndex) {
        takeIndex = true;
        return sum;
      }
      if (this.list[index] + this.list[index + 1] === 10) {
        takeIndex = false;
        return sum + 10 + this.list[index + 2];
      } else if (this.list[index] + this.list[index + 1] < 10) {
        takeIndex = false;
        return sum + num + this.list[index + 1];
      }
      return sum;
    }, 0);
  }
}
