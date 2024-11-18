import { Options } from "./Interfaces";

export class Filters {
  included: string[] = [];
  excluded: string[] = [];
  ignored: string[] = [];

  constructor() {}

  include_value(value: string): boolean {
    let ignored_search: number = this.ignored.findIndex((option) => option === value);
    if (ignored_search >= 0) this.ignored.splice(ignored_search, 1);

    let included_search: number = this.included.findIndex((option) => option === value);
    if (included_search >= 0) return false;
    else this.included.push(value);
    return true;
  }

  exclude_value(value: string): boolean | string {
    let included_index: number = this.included.findIndex((option) => option === value);
    if (included_index < 0) return "value not in included list";
    this.included.splice(included_index, 1);

    let search: number = this.excluded.findIndex((option) => option === value);
    if (search >= 0) return false;
    else this.excluded.push(value);
    return true;
  }

  ignore_value(value: string): boolean | string {
    let excluded_search: number = this.excluded.findIndex((option) => option === value);
    if (excluded_search < 0) return "value not in excluded list";
    this.excluded.splice(excluded_search, 1);

    let ignored_search: number = this.ignored.findIndex((option) => option === value);
    if (ignored_search >= 0) return false;
    else this.ignored.push(value);
    return true;
  }
}
