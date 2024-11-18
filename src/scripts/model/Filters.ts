import { Options } from "./Interfaces";

export class Filters {
  included: string[] = [];
  excluded: string[] = [];

  constructor() {}

  clean_out_value(new_v: string): boolean {
    const states = Object.keys(this);

    for (let index in states) {
      let state = states[index] as keyof Options;
      let search = this[state].findIndex((old_v) => old_v === new_v);
      if (search >= 0) this[state].splice(search, 1);
    }

    return true;
  }

  include_value(value: string): boolean {
    let search: number = this.included.findIndex((genre) => genre === value);
    if (search >= 0) return false;
    else this.included.push(value);
    return true;
  }

  exclude_value(new_v: string): boolean {
    let search: number = this.excluded.findIndex((genre) => genre === new_v);
    if (search >= 0) return false;
    else this.excluded.push(new_v);
    return true;
  }
}
