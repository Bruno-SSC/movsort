import { genre_object } from "./Interfaces";

export class ActiveFilters {
  static genres: genre_object[] = [];
  static year: number = 2024;
  static search_query: string = "";
  static page: number = 1;
}
