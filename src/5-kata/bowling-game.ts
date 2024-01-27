export class BowlingGame {
  list: number[] = [];
  roll(number: number) {
    this.list.push(number);
  }
  score() {
    return this.list.reduce((a, b) => a + b, 0);
  }
}
