export class YearModalModel {
  year: number = 2024;

  init() {}

  change_year(value: number) {
    this.year = value;
  }
}
