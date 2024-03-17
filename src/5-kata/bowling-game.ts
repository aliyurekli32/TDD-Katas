export class BowlingGame {
  list: number[] = [];
  roll(number: number) {
    this.list.push(number);
  }
  score() {
    let takeIndex: boolean = true;
    const isStrike = (num: number, index: number, length: number) =>
      num === 10 && index + 1 < length && index + 2 < length;
    const isSpare = (num: number, index: number, length: number) =>
      num + this.list[index + 1] === 10 && index + 2 < length;

    return this.list.reduce((sum: number, num: number, index: number) => {
      if (!takeIndex) {
        takeIndex = true;
        return sum;
      }
      if (isStrike(num, index, this.list.length))
        return sum + 10 + this.list[index + 1] + this.list[index + 2];
      if (isSpare(num, index, this.list.length)) {
        takeIndex = false;
        return sum + 10 + this.list[index + 2];
      } else if (
        this.list[index] + this.list[index + 1] < 10 &&
        index + 1 < this.list.length
      ) {
        takeIndex = false;
        return sum + num + this.list[index + 1];
      }
      return sum;
    }, 0);
  }
}
