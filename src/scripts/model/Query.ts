import { Filters } from "./Filters";

export class Query {
  options: {};
  adult: boolean;
  video: boolean;
  language: string;
  page: number;
  sort: string;
  included_genres: string;
  excluded_genres: string;
  year: number;

  constructor() {
    this.adult = false;
    this.video = true;
    this.language = "en-US";
    this.page = 1;
    this.sort = "popularity.desc";
    this.included_genres = "";
    this.excluded_genres = "";
    this.year = 2011;

    this.options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWRlNzAzZjBiZTk1ODcwMDE0N2MxYTM3ZDg0ODRkMCIsIm5iZiI6MTczMTA4Nzc2My4zMTc2NTY1LCJzdWIiOiI2MjlhYTAxNGE0NGQwOTUyNzZlYjA5YWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qaMthKyz051xoaRMK7GNzF-4mj_oKawzBVTUz4yelJI",
      },
    };
  }

  update_genres(): void | string {
    let data = localStorage.getItem("genres");
    if (!data) return "data not found";
    const genres: Filters = JSON.parse(data);
    let genre_IDs = localStorage.getItem("genre_IDs");
    if (!genre_IDs) return "genre_IDs not found";

    genres.included.forEach((value) => {
      for (let entry of JSON.parse(genre_IDs)) {
        if (entry.name === value) {
          this.included_genres += entry.id + ",";
        }
      }
    });

    genres.excluded.forEach((value) => {
      for (let entry of JSON.parse(genre_IDs)) {
        if (entry.name === value) {
          this.excluded_genres += entry.id + ",";
        }
      }
    });
  }

  update_year(): void | string {
    const data = localStorage.getItem("query_year");
    if (!data) return "data for number not found";
    const year: number = JSON.parse(data);
    if (year <= 1950) return "too much in the past";
    this.year = year;
  }

  build_URL(): string {
    let url = "https://api.themoviedb.org/3/discover/movie?";
    url += `primary_release_year=${this.year}`;
    url += `include_adult=${this.adult}&`;
    url += `include_video=${this.video}&`;
    url += `language=${this.language}&`;
    url += `page=${this.page}&`;
    url += `with_genres=${this.included_genres}&`;
    url += `without_genres=${this.excluded_genres}&`;
    url += `sort_by=${this.sort}`;
    return url;
  }

  fetch_movies = async (): Promise<object[]> => {
    const URL = this.build_URL();
    const req = await fetch(URL, this.options);
    const json = await req.json();
    console.log(json.results);
    return json.results;
  };
}
