export class MovieListModel {
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

  async fetch_movies() {
    let URL = "https://api.themoviedb.org/3/discover/movie?";
    URL += `primary_release_year=${this.year}`;
    URL += `include_adult=${this.adult}&`;
    URL += `include_video=${this.video}&`;
    URL += `language=${this.language}&`;
    URL += `page=${this.page}&`;
    URL += `with_genres=${this.included_genres}&`;
    URL += `without_genres=${this.excluded_genres}&`;
    URL += `sort_by=${this.sort}`;
    
    const req = await fetch(URL, this.options);
    const json = await req.json();
    return json.results;
  }
}
